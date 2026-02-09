import { Form, Button } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-3">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input id="wd-name" className="form-control" defaultValue="A1" />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">
          Description
        </label>
        <textarea
          id="wd-description"
          className="form-control"
          rows={10}
          defaultValue={`The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:
- Your full name and section
- Links to each of the lab assignments
- Link to the Kambaz application
- Links to all relevant source code repositories

The Kambaz application should include a link to navigate back to the landing page.`}
        />
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-points" className="col-sm-2 col-form-label">
          Points
        </label>
        <div className="col-sm-10">
          <input id="wd-points" className="form-control" defaultValue={100} />
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
        <label
          htmlFor="wd-display-grade-as"
          className="col-sm-2 col-form-label"
        >
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
                <input
                  type="checkbox"
                  id="wd-text-entry"
                  className="form-check-input"
                />
                <label htmlFor="wd-text-entry" className="form-check-label">
                  Text Entry
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  id="wd-website-url"
                  className="form-check-input"
                  defaultChecked
                />
                <label htmlFor="wd-website-url" className="form-check-label">
                  Website URL
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  id="wd-media-recordings"
                  className="form-check-input"
                />
                <label
                  htmlFor="wd-media-recordings"
                  className="form-check-label"
                >
                  Media Recordings
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  id="wd-student-annotation"
                  className="form-check-input"
                />
                <label
                  htmlFor="wd-student-annotation"
                  className="form-check-label"
                >
                  Student Annotation
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  id="wd-file-upload"
                  className="form-check-input"
                />
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
              <label htmlFor="wd-due-date" className="form-label">
                Due
              </label>
              <input
                type="datetime-local"
                id="wd-due-date"
                className="form-control"
                defaultValue="2024-05-13T23:59"
              />
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="wd-available-from" className="form-label">
                  Available from
                </label>
                <input
                  type="datetime-local"
                  id="wd-available-from"
                  className="form-control"
                  defaultValue="2024-05-06T00:00"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="wd-available-until" className="form-label">
                  Until
                </label>
                <input
                  type="datetime-local"
                  id="wd-available-until"
                  className="form-control"
                  defaultValue="2024-05-20T23:59"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="d-flex justify-content-end">
        <Button variant="secondary" className="me-2">
          Cancel
        </Button>
        <Button variant="danger">Save</Button>
      </div>
    </div>
  );
}
