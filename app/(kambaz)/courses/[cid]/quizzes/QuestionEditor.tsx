/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaTrash, FaPlus } from "react-icons/fa";

export default function QuestionEditor({
  question: initialQuestion,
  onSave,
  onCancel,
}: {
  question: any;
  onSave: (q: any) => void;
  onCancel: () => void;
}) {
  const [question, setQuestion] = useState<any>(initialQuestion);

  const handleTypeChange = (type: string) => {
    setQuestion({
      ...question,
      type,
      choices:
        type === "MULTIPLE_CHOICE"
          ? [
              { _id: "C1", text: "" },
              { _id: "C2", text: "" },
              { _id: "C3", text: "" },
              { _id: "C4", text: "" },
            ]
          : [],
      correctAnswer: type === "TRUE_FALSE" ? "true" : "",
    });
  };

  const handleAddChoice = () => {
    setQuestion({
      ...question,
      choices: [...question.choices, { _id: `C${Date.now()}`, text: "" }],
    });
  };

  const handleDeleteChoice = (choiceId: string) => {
    setQuestion({
      ...question,
      choices: question.choices.filter((c: any) => c._id !== choiceId),
    });
  };

  const handleChoiceText = (choiceId: string, text: string) => {
    setQuestion({
      ...question,
      choices: question.choices.map((c: any) =>
        c._id === choiceId ? { ...c, text } : c,
      ),
    });
  };

  return (
    <div className="border rounded p-3 m-2 bg-light">
      {/* Row: title, type selector, points */}
      <div className="row mb-3 g-2">
        <div className="col">
          <input
            className="form-control"
            placeholder="Question title"
            value={question.title}
            onChange={(e) =>
              setQuestion({ ...question, title: e.target.value })
            }
          />
        </div>
        <div className="col-auto">
          <select
            id={`wd-question-type-${question._id}`}
            className="form-select"
            value={question.type}
            onChange={(e) => handleTypeChange(e.target.value)}
          >
            <option value="MULTIPLE_CHOICE">Multiple Choice</option>
            <option value="TRUE_FALSE">True/False</option>
            <option value="FILL_IN_BLANK">Fill in the Blank</option>
          </select>
        </div>
        <div className="col-auto d-flex align-items-center gap-2">
          <label className="mb-0">pts:</label>
          <input
            type="number"
            className="form-control"
            style={{ width: "80px" }}
            value={question.points}
            onChange={(e) =>
              setQuestion({
                ...question,
                points: parseInt(e.target.value) || 0,
              })
            }
          />
        </div>
      </div>

      {/* Question text */}
      <div className="mb-3">
        <label className="form-label fw-bold">Question</label>
        <textarea
          className="form-control"
          rows={3}
          value={question.questionText}
          onChange={(e) =>
            setQuestion({ ...question, questionText: e.target.value })
          }
        />
      </div>

      {/* Multiple Choice */}
      {question.type === "MULTIPLE_CHOICE" && (
        <div className="mb-3">
          <label className="form-label fw-bold">Answers</label>
          <p className="text-muted small">
            Select the radio button next to the correct answer.
          </p>
          {question.choices.map((choice: any) => (
            <div key={choice._id} className="d-flex align-items-center mb-2">
              <input
                type="radio"
                className="form-check-input me-2"
                name={`correct-${question._id}`}
                checked={question.correctAnswer === choice._id}
                onChange={() =>
                  setQuestion({ ...question, correctAnswer: choice._id })
                }
              />
              <input
                type="text"
                className="form-control me-2"
                placeholder="Answer text"
                value={choice.text}
                onChange={(e) => handleChoiceText(choice._id, e.target.value)}
              />
              <FaTrash
                className="text-danger"
                style={{ cursor: "pointer", flexShrink: 0 }}
                onClick={() => handleDeleteChoice(choice._id)}
              />
            </div>
          ))}
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={handleAddChoice}
          >
            <FaPlus className="me-1" />
            Add Answer
          </Button>
        </div>
      )}

      {/* True/False */}
      {question.type === "TRUE_FALSE" && (
        <div className="mb-3">
          <label className="form-label fw-bold">Correct Answer</label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id={`tf-true-${question._id}`}
              checked={question.correctAnswer === "true"}
              onChange={() =>
                setQuestion({ ...question, correctAnswer: "true" })
              }
            />
            <label
              className="form-check-label"
              htmlFor={`tf-true-${question._id}`}
            >
              True
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id={`tf-false-${question._id}`}
              checked={question.correctAnswer === "false"}
              onChange={() =>
                setQuestion({ ...question, correctAnswer: "false" })
              }
            />
            <label
              className="form-check-label"
              htmlFor={`tf-false-${question._id}`}
            >
              False
            </label>
          </div>
        </div>
      )}

      {/* Fill in the Blank */}
      {question.type === "FILL_IN_BLANK" && (
        <div className="mb-3">
          <label className="form-label fw-bold">Correct Answers</label>
          <p className="text-muted small">
            Any of these answers will be accepted (case insensitive).
          </p>
          {(Array.isArray(question.correctAnswer)
            ? question.correctAnswer
            : [question.correctAnswer || ""]
          ).map((answer: string, index: number) => (
            <div key={index} className="d-flex align-items-center mb-2">
              <input
                type="text"
                className="form-control me-2"
                placeholder={`Accepted answer ${index + 1}`}
                value={answer}
                onChange={(e) => {
                  const updated = Array.isArray(question.correctAnswer)
                    ? [...question.correctAnswer]
                    : [question.correctAnswer || ""];
                  updated[index] = e.target.value;
                  setQuestion({ ...question, correctAnswer: updated });
                }}
              />
              <FaTrash
                className="text-danger"
                style={{ cursor: "pointer", flexShrink: 0 }}
                onClick={() => {
                  const updated = Array.isArray(question.correctAnswer)
                    ? question.correctAnswer.filter(
                        (_: any, i: number) => i !== index,
                      )
                    : [];
                  setQuestion({
                    ...question,
                    correctAnswer: updated.length ? updated : [""],
                  });
                }}
              />
            </div>
          ))}
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => {
              const current = Array.isArray(question.correctAnswer)
                ? question.correctAnswer
                : [question.correctAnswer || ""];
              setQuestion({ ...question, correctAnswer: [...current, ""] });
            }}
          >
            <FaPlus className="me-1" />
            Add Answer
          </Button>
        </div>
      )}

      <div className="d-flex justify-content-end gap-2">
        <Button variant="secondary" size="sm" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="danger" size="sm" onClick={() => onSave(question)}>
          Update Question
        </Button>
      </div>
    </div>
  );
}
