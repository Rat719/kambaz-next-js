import { ListGroup, ListGroupItem } from "react-bootstrap";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentsControls />
      <br /><br /><br /><br />

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
            <ListGroupItem className="wd-assignment-list-item p-3 ps-1 d-flex align-items-start">
              <BsGripVertical className="me-2 fs-3" />
              <FaRegEdit className="me-3 fs-5 text-success" />
              <div className="flex-grow-1">
                <Link
                  href="/courses/1234/assignments/123"
                  className="wd-assignment-link text-dark text-decoration-none"
                >
                  <strong>A1</strong>
                </Link>
                <br />
                <span className="text-danger">Multiple Modules</span> |{" "}
                <strong>Not available until</strong> May 6 at 12:00am
                <br />
                <strong>Due</strong> May 13 at 11:59pm | 100 pts
              </div>
              <AssignmentControlButtons />
            </ListGroupItem>

            <ListGroupItem className="wd-assignment-list-item p-3 ps-1 d-flex align-items-start">
              <BsGripVertical className="me-2 fs-3" />
              <FaRegEdit className="me-3 fs-5 text-success" />
              <div className="flex-grow-1">
                <Link
                  href="/courses/1234/assignments/124"
                  className="wd-assignment-link text-dark text-decoration-none"
                >
                  <strong>A2</strong>
                </Link>
                <br />
                <span className="text-danger">Multiple Modules</span> |{" "}
                <strong>Not available until</strong> May 13 at 12:00am
                <br />
                <strong>Due</strong> May 20 at 11:59pm | 100 pts
              </div>
              <AssignmentControlButtons />
            </ListGroupItem>

            <ListGroupItem className="wd-assignment-list-item p-3 ps-1 d-flex align-items-start">
              <BsGripVertical className="me-2 fs-3" />
              <FaRegEdit className="me-3 fs-5 text-success" />
              <div className="flex-grow-1">
                <Link
                  href="/courses/1234/assignments/125"
                  className="wd-assignment-link text-dark text-decoration-none"
                >
                  <strong>A3</strong>
                </Link>
                <br />
                <span className="text-danger">Multiple Modules</span> |{" "}
                <strong>Not available until</strong> May 20 at 12:00am
                <br />
                <strong>Due</strong> May 27 at 11:59pm | 100 pts
              </div>
              <AssignmentControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}