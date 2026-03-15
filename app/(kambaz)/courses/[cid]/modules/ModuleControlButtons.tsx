import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  return (
    <div className="d-flex align-items-center">
      <FaPencil onClick={() => editModule(moduleId)}
        className="text-primary me-3" style={{ cursor: "pointer" }} />
      <FaTrash className="text-danger me-3"
        onClick={() => deleteModule(moduleId)} style={{ cursor: "pointer" }} />
      <BsPlus className="fs-4 me-1" />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
