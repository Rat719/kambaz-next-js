/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment, setAssignments } from "./reducer";
import { RootState } from "../../../store";
import { useEffect } from "react";
import * as client from "./client";

interface Assignment {
  _id: string; title: string; course: string;
  description: string; availableDate: string;
  dueDate: string; points: number;
}

const formatDate = (dateStr: string) => {
  if (!dateStr) return "";
  if (dateStr.includes("at")) return dateStr;
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric" }) + " at 11:59pm";
};

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const isFaculty = ["FACULTY", "ADMIN"].includes((currentUser as any)?.role);
  const dispatch = useDispatch();

  const fetchAssignments = async () => {
    const data = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(data));
  };

  useEffect(() => {
    fetchAssignments();
  }, [cid]);

  const onDeleteAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  return (
    <div id="wd-assignments">
      {isFaculty && <AssignmentsControls />}
      <ListGroup className="rounded-0" id="wd-assignments-list">
        <ListGroupItem className="p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <IoMdArrowDropdown className="me-2 fs-3" />
            <strong>ASSIGNMENTS</strong>
            <div className="ms-auto d-flex align-items-center">
              <span className="badge rounded-pill bg-light text-dark border me-2">
                40% of Total
              </span>
              <BsPlus className="fs-4" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
          <ListGroup className="rounded-0">
            {assignments.map((assignment: Assignment) => (
                <ListGroupItem key={assignment._id}
                  className="wd-assignment-list-item p-3 ps-1 d-flex align-items-start">
                  <BsGripVertical className="me-2 fs-3" />
                  <FaRegEdit className="me-3 fs-5 text-success" />
                  <div className="flex-grow-1">
                    {isFaculty ? (
                      <Link href={`/courses/${cid}/assignments/${assignment._id}`}
                        className="wd-assignment-link text-dark text-decoration-none">
                        <strong>{assignment.title}</strong>
                      </Link>
                    ) : (
                      <strong>{assignment.title}</strong>
                    )}
                    <br />
                    <span className="text-danger">Multiple Modules</span> |{" "}
                    <strong>Not available until</strong> {formatDate(assignment.availableDate)}
                    <br />
                    <strong>Due</strong> {formatDate(assignment.dueDate)} | {assignment.points} pts
                  </div>
                  {isFaculty && (
                    <AssignmentControlButtons
                      assignmentId={assignment._id}
                      deleteAssignment={(id) => onDeleteAssignment(id)}
                    />
                  )}
                </ListGroupItem>
              ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}