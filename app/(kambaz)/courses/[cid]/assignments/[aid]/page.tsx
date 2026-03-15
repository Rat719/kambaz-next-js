/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "react-bootstrap";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "../reducer";
import { RootState } from "../../../../store";
import { useState, useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector(
    (state: RootState) => state.assignmentsReducer,
  );

  const existingAssignment = assignments.find((a: any) => a._id === aid);

  const [assignment, setAssignment] = useState<any>(
    existingAssignment || {
      title: "New Assignment",
      description: "New Description",
      points: 100,
      dueDate: "",
      availableDate: "",
      notAvailableUntil: "",
      course: cid,
    },
  );

  const dueDateRef = useRef<HTMLInputElement>(null);
  const availableFromRef = useRef<HTMLInputElement>(null);
  const availableUntilRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    if (existingAssignment) {
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(addAssignment({ ...assignment, course: cid }));
    }
    router.push(`/courses/${cid}/assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="p-3">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input
          id="wd-name"
          className="form-control"
          value={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">
          Description
        </label>
        <textarea
          id="wd-description"
          className="form-control"
          rows={10}
          value={assignment.description}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
        />
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-points" className="col-sm-2 col-form-label">
          Points
        </label>
        <div className="col-sm-10">
          <input
            id="wd-points"
            className="form-control"
            value={assignment.points}
            onChange={(e) =>
              setAssignment({ ...assignment, points: parseInt(e.target.value) })
            }
          />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-group" className="col-sm-2 col-form-label">
          Assignment Group
        </label>
        <div className="col-sm-10">
          <select id="wd-group" className="form-select">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-display-grade-as" className="col-sm-2 col-form-label">
          Display Grade as
        </label>
        <div className="col-sm-10">
          <select id="wd-display-grade-as" className="form-select">
            <option value="Percentage">Percentage</option>
            <option value="Points">Points</option>
            <option value="Letter">Letter Grade</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label">
          Submission Type
        </label>
        <div className="col-sm-10">
          <div className="border p-3">
            <select id="wd-submission-type" className="form-select mb-3">
              <option value="Online">Online</option>
              <option value="In Person">In Person</option>
              <option value="Paper">Paper</option>
            </select>
            <div>
              <strong>Online Entry Options</strong>
              <div className="form-check mt-2">
                <input type="checkbox" id="wd-text-entry" className="form-check-input" />
                <label htmlFor="wd-text-entry" className="form-check-label">
                  Text Entry
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="wd-website-url" className="form-check-input" defaultChecked />
                <label htmlFor="wd-website-url" className="form-check-label">
                  Website URL
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
                <label htmlFor="wd-media-recordings" className="form-check-label">
                  Media Recordings
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
                <label htmlFor="wd-student-annotation" className="form-check-label">
                  Student Annotation
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="wd-file-upload" className="form-check-input" />
                <label htmlFor="wd-file-upload" className="form-check-label">
                  File Uploads
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <label className="col-sm-2 col-form-label">Assign</label>
        <div className="col-sm-10">
          <div className="border p-3">
            <div className="mb-3">
              <label htmlFor="wd-assign-to" className="form-label">
                Assign to
              </label>
              <input
                id="wd-assign-to"
                className="form-control"
                defaultValue="Everyone"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="wd-due-date" className="form-label">Due</label>
              <div className="input-group">
                <input type="date" id="wd-due-date"
                  ref={dueDateRef}
                  className="form-control"
                  style={{ color: "black" }}
                  value={assignment.dueDate}
                  onChange={(e) =>
                    setAssignment({ ...assignment, dueDate: e.target.value })}
                />
                <span className="input-group-text" style={{ cursor: "pointer" }}
                  onClick={() => dueDateRef.current?.showPicker()}>
                  <FaCalendarAlt />
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="wd-available-from" className="form-label">
                  Available from
                </label>
                <div className="input-group">
                  <input type="date" id="wd-available-from"
                    ref={availableFromRef}
                    className="form-control"
                    style={{ color: "black" }}
                    value={assignment.availableDate}
                    onChange={(e) =>
                      setAssignment({ ...assignment, availableDate: e.target.value })}
                  />
                  <span className="input-group-text" style={{ cursor: "pointer" }}
                    onClick={() => availableFromRef.current?.showPicker()}>
                    <FaCalendarAlt />
                  </span>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="wd-available-until" className="form-label">
                  Until
                </label>
                <div className="input-group">
                  <input type="date" id="wd-available-until"
                    ref={availableUntilRef}
                    className="form-control"
                    style={{ color: "black" }}
                    value={assignment.notAvailableUntil}
                    onChange={(e) =>
                      setAssignment({ ...assignment, notAvailableUntil: e.target.value })}
                  />
                  <span className="input-group-text" style={{ cursor: "pointer" }}
                    onClick={() => availableUntilRef.current?.showPicker()}>
                    <FaCalendarAlt />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="d-flex justify-content-end">
        <Button variant="secondary" className="me-2"
          onClick={() => router.push(`/courses/${cid}/assignments`)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
}