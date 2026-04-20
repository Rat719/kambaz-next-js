/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { deleteQuiz, updateQuiz, setQuizzes } from "./reducer";
import QuizzesControls from "./QuizzesControls";
import QuizControlButtons from "./QuizControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { FaQuestionCircle } from "react-icons/fa";
import * as client from "./client";
import { useEffect } from "react";

export default function Quizzes() {
  const { cid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { quizzes } = useSelector((state: RootState) => state.quizzesReducer);
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer,
  );
  const isFaculty =
    currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN";

  const fetchQuizzes = async () => {
    const quizzes = await client.findQuizzesForCourse(cid as string);
    dispatch(setQuizzes(quizzes));
  };

  useEffect(() => {
    fetchQuizzes();
  }, [cid]);

  const visibleQuizzes = (
    isFaculty ? quizzes : quizzes.filter((q: any) => q.published)
  )
    .slice()
    .sort((a: any, b: any) => {
      if (!a.availableDate) return 1;
      if (!b.availableDate) return -1;
      return (
        new Date(a.availableDate).getTime() -
        new Date(b.availableDate).getTime()
      );
    });

  const handleDelete = async (quizId: string) => {
    await client.deleteQuiz(quizId);
    dispatch(deleteQuiz(quizId));
  };

  const handleTogglePublish = async (quiz: any) => {
    const updated = { ...quiz, published: !quiz.published };
    await client.updateQuiz(updated);
    dispatch(updateQuiz(updated));
  };

  return (
    <div id="wd-quizzes" className="p-3">
      <QuizzesControls />
      <ul id="wd-quizzes-list" className="list-group rounded-0 mt-3">
        <li className="list-group-item p-0">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <b>Assignment Quizzes</b>
          </div>
          <ul className="list-group rounded-0">
            {visibleQuizzes.length === 0 && (
              <li className="list-group-item text-center text-muted p-4">
                No quizzes yet. Click <b>+ Quiz</b> to add one.
              </li>
            )}
            {visibleQuizzes.map((quiz: any) => (
              <li
                key={quiz._id}
                className="list-group-item d-flex align-items-center p-3 ps-1"
              >
                <BsGripVertical className="me-2 fs-3" />
                <FaQuestionCircle className="text-success me-2 fs-5" />
                <div
                  className="flex-fill"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    router.push(`/courses/${cid}/quizzes/${quiz._id}`)
                  }
                >
                  <b>{quiz.title}</b>
                  <br />
                  <small className="text-muted">
                    <b>Not available until</b> {quiz.availableDate}&nbsp;|&nbsp;
                    <b>Due</b> {quiz.dueDate}&nbsp;|&nbsp;
                    {quiz.points} pts&nbsp;|&nbsp;
                    {quiz.questions?.length || 0} Questions
                  </small>
                </div>
                {isFaculty && (
                  <QuizControlButtons
                    quiz={quiz}
                    handleDelete={handleDelete}
                    handleTogglePublish={handleTogglePublish}
                  />
                )}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
