"use client";
import { Button, FormControl } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export default function QuizzesControls() {
  const { cid } = useParams();
  const router = useRouter();
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const isFaculty =
    currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN";

  return (
    <div id="wd-quizzes-controls" className="text-nowrap">
      {isFaculty && (
        <Button
          variant="danger"
          size="lg"
          className="me-1 float-end"
          id="wd-add-quiz"
          onClick={() => router.push(`/courses/${cid}/quizzes/new`)}
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Quiz
        </Button>
      )}
      <div
        className="position-relative"
        style={{ width: "300px", display: "inline-block" }}
      >
        <CiSearch
          className="position-absolute fs-4"
          style={{ left: "10px", top: "50%", transform: "translateY(-50%)" }}
        />
        <FormControl
          id="wd-search-quiz"
          placeholder="Search..."
          className="ps-5"
          size="lg"
        />
      </div>
    </div>
  );
}
