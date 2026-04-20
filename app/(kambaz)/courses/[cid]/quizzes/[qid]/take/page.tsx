/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../store";
import { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import { addAttempt } from "../../reducer";

export default function TakeQuiz() {
  const { cid, qid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { quizzes } = useSelector((state: RootState) => state.quizzesReducer);
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );

  const quiz = quizzes.find((q: any) => q._id === qid);
  const questions: any[] = quiz?.questions || [];

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(
    quiz?.timeLimit ? quiz.timeLimit * 60 : 0
  );

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (quiz?.timeLimit > 0 && !submitted) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quiz]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = () => {
    if (timerRef.current) clearInterval(timerRef.current);

    let earned = 0;
    questions.forEach((q: any) => {
      const given = (answers[q._id] || "").trim();
      if (q.type === "MULTIPLE_CHOICE") {
        if (given === q.correctAnswer) earned += q.points;
      } else {
        if (given.toLowerCase() === (q.correctAnswer || "").toLowerCase())
          earned += q.points;
      }
    });

    setScore(earned);
    setSubmitted(true);

    dispatch(
      addAttempt({
        _id: `AT${Date.now()}`,
        quiz: qid,
        user: (currentUser as any)?._id,
        score: earned,
        answers: Object.entries(answers).map(([questionId, answer]) => ({
          questionId,
          answer,
        })),
        date: new Date().toISOString(),
      })
    );
  };

  if (!quiz) return <div className="p-3">Quiz not found.</div>;

  /* ── Submitted / Results view ── */
  if (submitted) {
    return (
      <div id="wd-quiz-submitted" className="p-3">
        <h3>Quiz Submitted</h3>
        <p className="fs-5">
          Your score:{" "}
          <b>
            {score} / {quiz.points}
          </b>
        </p>
        <hr />
        {quiz.showCorrectAnswers && (
          <div>
            <h5>Review</h5>
            {questions.map((q: any, i: number) => {
              const given = answers[q._id] || "";
              const correct = q.correctAnswer || "";
              const isCorrect =
                q.type === "MULTIPLE_CHOICE"
                  ? given === correct
                  : given.toLowerCase().trim() ===
                    correct.toLowerCase().trim();
              return (
                <div
                  key={q._id}
                  className={`mb-3 p-3 border rounded ${
                    isCorrect ? "border-success" : "border-danger"
                  }`}
                >
                  <b>
                    Q{i + 1}: {q.questionText}
                  </b>
                  <p className="mb-1 mt-1">
                    <span className="text-muted">Your answer: </span>
                    {q.type === "MULTIPLE_CHOICE"
                      ? q.choices.find((c: any) => c._id === given)?.text ||
                        "(no answer)"
                      : given || "(no answer)"}
                  </p>
                  {!isCorrect && (
                    <p className="text-success mb-0">
                      Correct answer:{" "}
                      {q.type === "MULTIPLE_CHOICE"
                        ? q.choices.find((c: any) => c._id === correct)?.text
                        : correct}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}
        <Button
          variant="danger"
          onClick={() => router.push(`/courses/${cid}/quizzes/${qid}`)}
        >
          Back to Quiz
        </Button>
      </div>
    );
  }

  /* ── Taking the quiz ── */
  const currentQuestion = quiz.oneQuestionAtATime
    ? questions[currentIndex]
    : null;

  return (
    <div id="wd-take-quiz" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>{quiz.title}</h4>
        {quiz.timeLimit > 0 && (
          <span
            className={`badge fs-6 ${
              timeLeft < 60 ? "bg-danger" : "bg-secondary"
            }`}
          >
            Time Remaining: {formatTime(timeLeft)}
          </span>
        )}
      </div>
      <hr />

      {quiz.oneQuestionAtATime ? (
        /* ── One question at a time ── */
        <div>
          <QuizQuestion
            question={currentQuestion}
            index={currentIndex}
            answer={answers[currentQuestion?._id]}
            onChange={(ans) => handleAnswer(currentQuestion._id, ans)}
          />
          <div className="d-flex justify-content-between mt-3">
            <Button
              variant="secondary"
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex(currentIndex - 1)}
            >
              &lt; Previous
            </Button>
            {currentIndex < questions.length - 1 ? (
              <Button
                variant="danger"
                onClick={() => setCurrentIndex(currentIndex + 1)}
              >
                Next &gt;
              </Button>
            ) : (
              <Button variant="danger" onClick={handleSubmit}>
                Submit Quiz
              </Button>
            )}
          </div>
          <p className="text-center text-muted mt-2 small">
            Question {currentIndex + 1} of {questions.length}
          </p>
        </div>
      ) : (
        /* ── All questions at once ── */
        <div>
          {questions.map((q: any, i: number) => (
            <QuizQuestion
              key={q._id}
              question={q}
              index={i}
              answer={answers[q._id]}
              onChange={(ans) => handleAnswer(q._id, ans)}
            />
          ))}
          <div className="d-flex justify-content-end mt-3">
            <Button variant="danger" onClick={handleSubmit}>
              Submit Quiz
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Individual question renderer ── */
function QuizQuestion({
  question,
  index,
  answer,
  onChange,
}: {
  question: any;
  index: number;
  answer: string;
  onChange: (ans: string) => void;
}) {
  if (!question) return null;

  return (
    <div className="border rounded p-3 mb-3">
      <div className="d-flex justify-content-between mb-2">
        <b>Question {index + 1}</b>
        <span className="text-muted">{question.points} pts</span>
      </div>
      <hr className="mt-0" />
      <p>{question.questionText}</p>

      {question.type === "MULTIPLE_CHOICE" && (
        <div>
          {question.choices.map((choice: any) => (
            <div key={choice._id} className="form-check mb-2">
              <input
                type="radio"
                className="form-check-input"
                id={`${question._id}-${choice._id}`}
                name={`q-${question._id}`}
                checked={answer === choice._id}
                onChange={() => onChange(choice._id)}
              />
              <label
                className="form-check-label"
                htmlFor={`${question._id}-${choice._id}`}
              >
                {choice.text}
              </label>
            </div>
          ))}
        </div>
      )}

      {question.type === "TRUE_FALSE" && (
        <div>
          {["true", "false"].map((val) => (
            <div key={val} className="form-check mb-2">
              <input
                type="radio"
                className="form-check-input"
                id={`${question._id}-${val}`}
                name={`q-${question._id}`}
                checked={answer === val}
                onChange={() => onChange(val)}
              />
              <label
                className="form-check-label"
                htmlFor={`${question._id}-${val}`}
              >
                {val.charAt(0).toUpperCase() + val.slice(1)}
              </label>
            </div>
          ))}
        </div>
      )}

      {question.type === "FILL_IN_BLANK" && (
        <input
          type="text"
          className="form-control"
          placeholder="Your answer"
          value={answer || ""}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
}
