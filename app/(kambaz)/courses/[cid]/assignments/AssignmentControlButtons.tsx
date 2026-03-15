"use client";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaCheckCircle, FaTrash } from "react-icons/fa";

export default function AssignmentControlButtons({
  assignmentId,
  deleteAssignment,
}: {
  assignmentId: string;
  deleteAssignment: (assignmentId: string) => void;
}) {
  return (
    <div className="float-end">
      <FaCheckCircle className="fs-5 text-success me-2" />
      <FaTrash
        className="text-danger me-2"
        onClick={() => {
          if (window.confirm("Are you sure you want to delete this assignment?")) {
            deleteAssignment(assignmentId);
          }
        }}
      />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}