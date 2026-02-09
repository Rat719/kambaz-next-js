import { IoEllipsisVertical } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <FaCheckCircle className="fs-5 text-success" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}