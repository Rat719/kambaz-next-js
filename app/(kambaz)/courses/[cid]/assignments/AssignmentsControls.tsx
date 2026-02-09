import { Button, FormControl } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export default function AssignmentsControls() {
  return (
    <div id="wd-assignments-controls" className="text-nowrap">
      <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </Button>
      <Button variant="secondary" size="lg" className="float-end me-2" id="wd-add-group">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </Button>
      <div className="position-relative" style={{ width: "300px", display: "inline-block" }}>
        <CiSearch className="position-absolute fs-4" style={{ left: "10px", top: "50%", transform: "translateY(-50%)" }} />
        <FormControl
          id="wd-search-assignment"
          placeholder="Search..."
          className="ps-5"
          size="lg"
        />
      </div>
    </div>
  );
}