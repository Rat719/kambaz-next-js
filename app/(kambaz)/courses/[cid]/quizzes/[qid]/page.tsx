/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { updateQuiz } from "../reducer";
import * as client from "../client";
import { RootState } from "../../../../store";
import { Button } from "react-bootstrap";
import { FaCheckCircle, FaBan, FaPencilAlt } from "react-icons/fa";

export default function QuizDetails() {
  const { cid, qid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { quizzes, attempts } = useSelector(
    (state: RootState) => state.quizzesReducer,
  );
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer,
  );
  const isFaculty =
    currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN";

  const quiz = quizzes.find((q: any) => q._id === qid);
  if (!quiz) return <div className="p-3">Quiz not found.</div>;

  const myAttempts = attempts.filter(
    (a: any) => a.quiz === qid && a.user === (currentUser as any)?._id,
  );
  const lastAttempt = myAttempts[myAttempts.length - 1];
  const attemptsAllowed = quiz.multipleAttempts ? quiz.maxAttempts : 1;
  const attemptsLeft = attemptsAllowed - myAttempts.length;

  const handleTogglePublish = async () => {
    const updated = { ...quiz, published: !quiz.published };
    try {
      await client.updateQuiz(updated);
    } catch {}
    dispatch(updateQuiz(updated));
  };

  return (
    <div id="wd-quiz-details" className="p-3">
      <div className="d-flex justify-content-end mb-3">
        {isFaculty && (
          <>
            <Button
              variant="secondary"
              className="me-2"
              onClick={() => router.push(`/courses/${cid}/quizzes/${qid}/edit`)}
            >
              <FaPencilAlt className="me-2" />
              Edit
            </Button>
            {quiz.published ? (
              <Button variant="success" onClick={() => handleTogglePublish()}>
                <FaCheckCircle className="me-2" />
                Published
              </Button>
            ) : (
              <Button variant="secondary" onClick={() => handleTogglePublish()}>
                <FaBan className="me-2" />
                Unpublish
              </Button>
            )}
          </>
        )}
      </div>

      <h3>{quiz.title}</h3>
      <hr />

      <table className="table table-bordered">
        <tbody>
          <tr>
            <td className="fw-bold" style={{ width: "35%" }}>
              Quiz Type
            </td>
            <td>{quiz.quizType}</td>
          </tr>
          <tr>
            <td className="fw-bold">Points</td>
            <td>{quiz.points}</td>
          </tr>
          <tr>
            <td className="fw-bold">Assignment Group</td>
            <td>{quiz.assignmentGroup}</td>
          </tr>
          <tr>
            <td className="fw-bold">Shuffle Answers</td>
            <td>{quiz.shuffleAnswers ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td className="fw-bold">Time Limit</td>
            <td>
              {quiz.timeLimit > 0 ? `${quiz.timeLimit} Minutes` : "No Limit"}
            </td>
          </tr>
          <tr>
            <td className="fw-bold">Multiple Attempts</td>
            <td>
              {quiz.multipleAttempts
                ? `Yes — ${quiz.maxAttempts} attempts allowed`
                : "No"}
            </td>
          </tr>
          <tr>
            <td className="fw-bold">Show Correct Answers</td>
            <td>{quiz.showCorrectAnswers ? "Immediately" : "No"}</td>
          </tr>
          <tr>
            <td className="fw-bold">Access Code</td>
            <td>{quiz.accessCode || "None"}</td>
          </tr>
          <tr>
            <td className="fw-bold">One Question at a Time</td>
            <td>{quiz.oneQuestionAtATime ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td className="fw-bold">Webcam Required</td>
            <td>{quiz.webcamRequired ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td className="fw-bold">Lock Questions After Answering</td>
            <td>{quiz.lockQuestionsAfterAnswering ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td className="fw-bold">Due Date</td>
            <td>{quiz.dueDate || "—"}</td>
          </tr>
          <tr>
            <td className="fw-bold">Available From</td>
            <td>{quiz.availableDate || "—"}</td>
          </tr>
          <tr>
            <td className="fw-bold">Until</td>
            <td>{quiz.untilDate || "—"}</td>
          </tr>
        </tbody>
      </table>

      {!isFaculty && (
        <div className="mt-3">
          {lastAttempt && (
            <p>
              Your last score:{" "}
              <b>
                {lastAttempt.score} / {quiz.points}
              </b>
              &nbsp; (Attempt {myAttempts.length} of {attemptsAllowed})
            </p>
          )}
          {attemptsLeft > 0 ? (
            <Button
              variant="danger"
              onClick={() => router.push(`/courses/${cid}/quizzes/${qid}/take`)}
            >
              {myAttempts.length === 0 ? "Take Quiz" : "Retake Quiz"}
            </Button>
          ) : (
            <p className="text-muted">No attempts remaining.</p>
          )}
        </div>
      )}

      {isFaculty && (
        <Button
          variant="danger"
          className="mt-3"
          onClick={() => router.push(`/courses/${cid}/quizzes/${qid}/take`)}
        >
          Preview Quiz
        </Button>
      )}
    </div>
  );
}
