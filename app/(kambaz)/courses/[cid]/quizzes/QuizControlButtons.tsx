/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useParams, useRouter } from "next/navigation";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaCheckCircle, FaBan, FaTrash, FaPencilAlt } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";

export default function QuizControlButtons({
  quiz,
  handleDelete,
  handleTogglePublish,
}: {
  quiz: any;
  handleDelete: (quizId: string) => void;
  handleTogglePublish: (quiz: any) => void;
}) {
  const { cid } = useParams();
  const router = useRouter();

  return (
    <div className="float-end d-flex align-items-center">
      {quiz.published ? (
        <FaCheckCircle
          className="fs-5 text-success me-2"
          style={{ cursor: "pointer" }}
          title="Published — click to unpublish"
          onClick={() => handleTogglePublish(quiz)}
        />
      ) : (
        <FaBan
          className="fs-5 text-secondary me-2"
          style={{ cursor: "pointer" }}
          title="Unpublished — click to publish"
          onClick={() => handleTogglePublish(quiz)}
        />
      )}
      <Dropdown>
        <Dropdown.Toggle
          variant="transparent"
          className="p-0 border-0"
          id={`wd-quiz-menu-${quiz._id}`}
        >
          <IoEllipsisVertical className="fs-4" />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() =>
              router.push(`/courses/${cid}/quizzes/${quiz._id}/edit`)
            }
          >
            <FaPencilAlt className="me-2" />
            Edit
          </Dropdown.Item>
          <Dropdown.Item
            className="text-danger"
            onClick={() => {
              if (window.confirm(`Delete "${quiz.title}"?`)) {
                handleDelete(quiz._id);
              }
            }}
          >
            <FaTrash className="me-2" />
            Delete
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
