/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

export default function QuizDetailsEditor({
  quiz,
  setQuiz,
}: {
  quiz: any;
  setQuiz: (q: any) => void;
}) {
  return (
    <div id="wd-quiz-details-editor">
      <div className="mb-3">
        <input
          id="wd-quiz-name"
          className="form-control form-control-lg"
          value={quiz.title}
          onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-quiz-description" className="form-label">
          Quiz Instructions
        </label>
        <textarea
          id="wd-quiz-description"
          className="form-control"
          rows={6}
          value={quiz.description}
          onChange={(e) => setQuiz({ ...quiz, description: e.target.value })}
        />
      </div>

      <div className="row mb-3">
        <label className="col-sm-3 col-form-label text-end">Quiz Type</label>
        <div className="col-sm-9">
          <select
            id="wd-quiz-type"
            className="form-select"
            value={quiz.quizType}
            onChange={(e) => setQuiz({ ...quiz, quizType: e.target.value })}
          >
            <option>Graded Quiz</option>
            <option>Practice Quiz</option>
            <option>Graded Survey</option>
            <option>Ungraded Survey</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <label className="col-sm-3 col-form-label text-end">
          Assignment Group
        </label>
        <div className="col-sm-9">
          <select
            id="wd-assignment-group"
            className="form-select"
            value={quiz.assignmentGroup}
            onChange={(e) =>
              setQuiz({ ...quiz, assignmentGroup: e.target.value })
            }
          >
            <option>Quizzes</option>
            <option>Exams</option>
            <option>Assignments</option>
            <option>Project</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <label
          htmlFor="wd-quiz-points"
          className="col-sm-3 col-form-label text-end"
        >
          Points
        </label>
        <div className="col-sm-9">
          <input
            id="wd-quiz-points"
            type="number"
            className="form-control"
            value={quiz.points}
            onChange={(e) =>
              setQuiz({ ...quiz, points: parseInt(e.target.value) || 0 })
            }
          />
        </div>
      </div>

      <fieldset className="border p-3 mb-3">
        <legend className="float-none w-auto fs-6 fw-bold">Options</legend>

        <div className="row mb-3">
          <label className="col-sm-3 col-form-label text-end">
            Shuffle Answers
          </label>
          <div className="col-sm-9 d-flex align-items-center">
            <input
              id="wd-shuffle-answers"
              type="checkbox"
              className="form-check-input me-2"
              checked={quiz.shuffleAnswers}
              onChange={(e) =>
                setQuiz({ ...quiz, shuffleAnswers: e.target.checked })
              }
            />
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-3 col-form-label text-end">Time Limit</label>
          <div className="col-sm-9">
            <div className="d-flex align-items-center gap-3">
              <input
                id="wd-time-limit-enabled"
                type="checkbox"
                className="form-check-input"
                checked={quiz.timeLimit > 0}
                onChange={(e) =>
                  setQuiz({ ...quiz, timeLimit: e.target.checked ? 20 : 0 })
                }
              />
              <label htmlFor="wd-time-limit-enabled" className="mb-0">
                Minutes
              </label>
              {quiz.timeLimit > 0 && (
                <input
                  id="wd-time-limit"
                  type="number"
                  className="form-control"
                  style={{ width: "100px" }}
                  value={quiz.timeLimit}
                  onChange={(e) =>
                    setQuiz({
                      ...quiz,
                      timeLimit: parseInt(e.target.value) || 0,
                    })
                  }
                />
              )}
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-3 col-form-label text-end">
            Multiple Attempts
          </label>
          <div className="col-sm-9 d-flex align-items-center gap-2">
            <input
              id="wd-multiple-attempts"
              type="checkbox"
              className="form-check-input"
              checked={quiz.multipleAttempts}
              onChange={(e) =>
                setQuiz({ ...quiz, multipleAttempts: e.target.checked })
              }
            />
            {quiz.multipleAttempts && (
              <>
                <label className="ms-3 mb-0">Allowed Attempts</label>
                <input
                  id="wd-max-attempts"
                  type="number"
                  className="form-control"
                  style={{ width: "80px" }}
                  value={quiz.maxAttempts}
                  onChange={(e) =>
                    setQuiz({
                      ...quiz,
                      maxAttempts: parseInt(e.target.value) || 1,
                    })
                  }
                />
              </>
            )}
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-3 col-form-label text-end">
            Show Correct Answers
          </label>
          <div className="col-sm-9 d-flex align-items-center">
            <input
              id="wd-show-correct-answers"
              type="checkbox"
              className="form-check-input me-2"
              checked={quiz.showCorrectAnswers}
              onChange={(e) =>
                setQuiz({ ...quiz, showCorrectAnswers: e.target.checked })
              }
            />
          </div>
        </div>

        <div className="row mb-3">
          <label
            htmlFor="wd-access-code"
            className="col-sm-3 col-form-label text-end"
          >
            Access Code
          </label>
          <div className="col-sm-9">
            <input
              id="wd-access-code"
              type="text"
              className="form-control"
              value={quiz.accessCode}
              onChange={(e) => setQuiz({ ...quiz, accessCode: e.target.value })}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-3 col-form-label text-end">
            One Question at a Time
          </label>
          <div className="col-sm-9 d-flex align-items-center">
            <input
              id="wd-one-question-at-a-time"
              type="checkbox"
              className="form-check-input me-2"
              checked={quiz.oneQuestionAtATime}
              onChange={(e) =>
                setQuiz({ ...quiz, oneQuestionAtATime: e.target.checked })
              }
            />
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-3 col-form-label text-end">
            Webcam Required
          </label>
          <div className="col-sm-9 d-flex align-items-center">
            <input
              id="wd-webcam-required"
              type="checkbox"
              className="form-check-input me-2"
              checked={quiz.webcamRequired}
              onChange={(e) =>
                setQuiz({ ...quiz, webcamRequired: e.target.checked })
              }
            />
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-3 col-form-label text-end">
            Lock Questions After Answering
          </label>
          <div className="col-sm-9 d-flex align-items-center">
            <input
              id="wd-lock-questions"
              type="checkbox"
              className="form-check-input me-2"
              checked={quiz.lockQuestionsAfterAnswering}
              onChange={(e) =>
                setQuiz({
                  ...quiz,
                  lockQuestionsAfterAnswering: e.target.checked,
                })
              }
            />
          </div>
        </div>
      </fieldset>

      <div className="row mb-3">
        <label
          htmlFor="wd-due-date"
          className="col-sm-3 col-form-label text-end"
        >
          Due Date
        </label>
        <div className="col-sm-9">
          <input
            id="wd-due-date"
            type="date"
            className="form-control"
            value={quiz.dueDate}
            onChange={(e) => setQuiz({ ...quiz, dueDate: e.target.value })}
          />
        </div>
      </div>

      <div className="row mb-3">
        <label
          htmlFor="wd-available-from"
          className="col-sm-3 col-form-label text-end"
        >
          Available From
        </label>
        <div className="col-sm-9">
          <input
            id="wd-available-from"
            type="date"
            className="form-control"
            value={quiz.availableDate}
            onChange={(e) =>
              setQuiz({ ...quiz, availableDate: e.target.value })
            }
          />
        </div>
      </div>

      <div className="row mb-3">
        <label
          htmlFor="wd-until-date"
          className="col-sm-3 col-form-label text-end"
        >
          Until
        </label>
        <div className="col-sm-9">
          <input
            id="wd-until-date"
            type="date"
            className="form-control"
            value={quiz.untilDate}
            onChange={(e) => setQuiz({ ...quiz, untilDate: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}
