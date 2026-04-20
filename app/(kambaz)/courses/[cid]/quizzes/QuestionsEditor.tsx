/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaTrash, FaPencilAlt, FaPlus } from "react-icons/fa";
import QuestionEditor from "./QuestionEditor";

export default function QuestionsEditor({
  quiz,
  setQuiz,
}: {
  quiz: any;
  setQuiz: (q: any) => void;
}) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [addingNew, setAddingNew] = useState(false);

  const handleSaveQuestion = (question: any) => {
    const exists = quiz.questions.find((q: any) => q._id === question._id);
    if (exists) {
      setQuiz({
        ...quiz,
        questions: quiz.questions.map((q: any) =>
          q._id === question._id ? question : q
        ),
      });
    } else {
      setQuiz({ ...quiz, questions: [...quiz.questions, question] });
    }
    setEditingId(null);
    setAddingNew(false);
  };

  const handleDeleteQuestion = (questionId: string) => {
    setQuiz({
      ...quiz,
      questions: quiz.questions.filter((q: any) => q._id !== questionId),
    });
  };

  const totalPoints = quiz.questions.reduce(
    (sum: number, q: any) => sum + (q.points || 0),
    0
  );

  const newQuestionTemplate = {
    _id: `QU${Date.now()}`,
    title: "",
    type: "MULTIPLE_CHOICE",
    points: 10,
    questionText: "",
    choices: [
      { _id: "C1", text: "" },
      { _id: "C2", text: "" },
      { _id: "C3", text: "" },
      { _id: "C4", text: "" },
    ],
    correctAnswer: "C1",
  };

  return (
    <div id="wd-questions-editor">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Total Points: {totalPoints}</span>
        <Button
          variant="secondary"
          id="wd-add-question"
          onClick={() => {
            setAddingNew(true);
            setEditingId(null);
          }}
        >
          <FaPlus className="me-2" />
          New Question
        </Button>
      </div>

      <ul className="list-group mb-3">
        {quiz.questions.map((question: any, index: number) => (
          <li key={question._id} className="list-group-item p-0">
            {editingId === question._id ? (
              <QuestionEditor
                question={question}
                onSave={handleSaveQuestion}
                onCancel={() => setEditingId(null)}
              />
            ) : (
              <div className="d-flex align-items-center p-3">
                <span className="flex-fill">
                  <b>Question {index + 1}</b>{" "}
                  <span className="text-muted">
                    ({question.type.replace(/_/g, " ")})
                  </span>{" "}
                  — {question.points} pts
                  {question.questionText && (
                    <span className="text-muted ms-2 small">
                      — {question.questionText.substring(0, 60)}
                      {question.questionText.length > 60 ? "…" : ""}
                    </span>
                  )}
                </span>
                <FaPencilAlt
                  className="text-primary me-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setEditingId(question._id);
                    setAddingNew(false);
                  }}
                />
                <FaTrash
                  className="text-danger"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDeleteQuestion(question._id)}
                />
              </div>
            )}
          </li>
        ))}
      </ul>

      {addingNew && (
        <QuestionEditor
          question={newQuestionTemplate}
          onSave={handleSaveQuestion}
          onCancel={() => setAddingNew(false)}
        />
      )}
    </div>
  );
}
