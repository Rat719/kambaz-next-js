export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />

      <label htmlFor="wd-description">Description</label>
      <br />
      <textarea
        id="wd-description"
        cols={50}
        rows={10}
        defaultValue="Description of the assignment goes here..."
      />
      <br />
      <br />

      <label htmlFor="wd-points">Points</label>
      <br />
      <input id="wd-points" defaultValue={100} />
      <br />
      <br />

      <label htmlFor="wd-group">Assignment Group</label>
      <br />
      <select id="wd-group">
        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
        <option value="QUIZZES">QUIZZES</option>
        <option value="EXAMS">EXAMS</option>
        <option value="PROJECT">PROJECT</option>
      </select>
      <br />
      <br />

      <label htmlFor="wd-display-grade-as">Display Grade as</label>
      <br />
      <select id="wd-display-grade-as">
        <option value="Percentage">Percentage</option>
        <option value="Points">Points</option>
        <option value="Complete/Incomplete">Complete/Incomplete</option>
      </select>
      <br />
      <br />

      <label htmlFor="wd-submission-type">Submission Type</label>
      <br />
      <select id="wd-submission-type">
        <option value="Online">Online</option>
        <option value="Paper">Paper</option>
        <option value="External Tool">External Tool</option>
      </select>
      <br />
      <br />

      <label>Online Entry Options</label>
      <br />
      <input type="checkbox" id="wd-text-entry" />
      <label htmlFor="wd-text-entry">Text Entry</label>
      <br />

      <input type="checkbox" id="wd-website-url" />
      <label htmlFor="wd-website-url">Website URL</label>
      <br />

      <input type="checkbox" id="wd-media-recordings" />
      <label htmlFor="wd-media-recordings">Media Recordings</label>
      <br />

      <input type="checkbox" id="wd-student-annotation" />
      <label htmlFor="wd-student-annotation">Student Annotation</label>
      <br />

      <input type="checkbox" id="wd-file-upload" />
      <label htmlFor="wd-file-upload">File Uploads</label>
      <br />
      <br />

      <label htmlFor="wd-assign-to">Assign to</label>
      <br />
      <input id="wd-assign-to" defaultValue="Everyone" />
      <br />
      <br />

      <label htmlFor="wd-due-date">Due</label>
      <br />
      <input type="date" id="wd-due-date" defaultValue="2026-01-25" />
      <br />
      <br />

     <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="wd-available-from">Available from</label><br />
              <input type="date" id="wd-available-from" defaultValue="2026-01-25" />
            </td>
            <td>
              <label htmlFor="wd-available-until">Until</label><br />
              <input type="date" id="wd-available-until" defaultValue="2026-01-25" />
            </td>
          </tr>
        </tbody>
      </table>
      <br />

      <hr />

      <button>Cancel</button>
      <button>Save</button>
    </div>
  );
}
