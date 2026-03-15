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
import { deleteAssignment } from "./reducer";
import { RootState } from "../../../store";

interface Assignment {
  _id: string; title: string; course: string;
  description: string; availableDate: string;
  dueDate: string; points: number;
}

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const isFaculty = (currentUser as any)?.role === "FACULTY";
  const dispatch = useDispatch();

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
            {assignments
              .filter((assignment: Assignment) => assignment.course === cid)
              .map((assignment: Assignment) => (
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
                    <strong>Not available until</strong> {assignment.availableDate}
                    <br />
                    <strong>Due</strong> {assignment.dueDate} | {assignment.points} pts
                  </div>
                  {isFaculty && (
                    <AssignmentControlButtons
                      assignmentId={assignment._id}
                      deleteAssignment={(id) => dispatch(deleteAssignment(id))}
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