/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../../store";
import { useState } from "react";
import { addQuiz, updateQuiz } from "../../reducer";
import { Button } from "react-bootstrap";
import * as client from "../../client";
import QuizDetailsEditor from "../../QuizDetailsEditor";
import QuestionsEditor from "../../QuestionsEditor";
export default function QuizEditor() {
  const { cid, qid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { quizzes } = useSelector((state: RootState) => state.quizzesReducer);
  const [activeTab, setActiveTab] = useState("details");

  const existingQuiz = quizzes.find((q: any) => q._id === qid);

  const [quiz, setQuiz] = useState<any>(
    existingQuiz || {
      title: "New Quiz",
      course: cid,
      description: "",
      quizType: "Graded Quiz",
      points: 0,
      assignmentGroup: "Quizzes",
      shuffleAnswers: true,
      timeLimit: 20,
      multipleAttempts: false,
      maxAttempts: 1,
      showCorrectAnswers: true,
      accessCode: "",
      oneQuestionAtATime: true,
      webcamRequired: false,
      lockQuestionsAfterAnswering: false,
      dueDate: "",
      availableDate: "",
      untilDate: "",
      published: false,
      questions: [],
    }
  );

  const handleSave = async (publish = false) => {
    const quizToSave = { ...quiz, published: publish || quiz.published };
    try {
      if (existingQuiz) {
        const updated = await client.updateQuiz(quizToSave);
        dispatch(updateQuiz(updated));
      } else {
        const created = await client.createQuiz(cid as string, quizToSave);
        dispatch(addQuiz(created));
      }
    } catch {
      // server not yet available — persist to local Redux state
      if (existingQuiz) {
        dispatch(updateQuiz(quizToSave));
      } else {
        dispatch(addQuiz({ ...quizToSave, _id: `Q${Date.now()}` }));
      }
    }
    router.push(`/courses/${cid}/quizzes`);
  };

  return (
    <div id="wd-quiz-editor" className="p-3">
      <ul className="nav nav-tabs mb-3" id="wd-quiz-editor-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "details" ? "active" : ""}`}
            onClick={() => setActiveTab("details")}
          >
            Details
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "questions" ? "active" : ""}`}
            onClick={() => setActiveTab("questions")}
          >
            Questions
          </button>
        </li>
      </ul>

      {activeTab === "details" && (
        <QuizDetailsEditor quiz={quiz} setQuiz={setQuiz} />
      )}
      {activeTab === "questions" && (
        <QuestionsEditor quiz={quiz} setQuiz={setQuiz} />
      )}

      <hr />
      <div className="d-flex justify-content-end gap-2">
        <Button
          variant="secondary"
          onClick={() => router.push(`/courses/${cid}/quizzes`)}
        >
          Cancel
        </Button>
        <Button variant="secondary" onClick={() => handleSave(false)}>
          Save
        </Button>
        <Button variant="danger" onClick={() => handleSave(true)}>
          Save &amp; Publish
        </Button>
      </div>
    </div>
  );
}
