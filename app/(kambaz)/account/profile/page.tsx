import Link from "next/link";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile Page</h3>
      <div>
        <label htmlFor="username" className="wd-username-label">
          Username:
        </label>{" "}
        <br />
        <input
          placeholder="username"
          className="wd-username"
          title="Please enter your username"
        />{" "}
      </div>
      <div>
        <label htmlFor="password" className="wd-password-label">
          Password:
        </label>{" "}
        <br />
        <input
          placeholder="password"
          type="password" // Ensures the input is masked
          className="wd-password"
          title="Please enter your password"
        />{" "}
      </div>
      <div>
        <label htmlFor="wd-first-name" className="wd-first-name-label">
          First Name:
        </label>{" "}
        <br />
        <input
          id="wd-first-name"
          placeholder="first name"
          className="wd-first-name"
          title="Please enter your first name"
        />{" "}
      </div>
      <div>
        <label htmlFor="wd-last-name" className="wd-last-name-label">
          Last Name:
        </label>{" "}
        <br />
        <input
          id="wd-last-name"
          placeholder="last name"
          className="wd-last-name"
          title="Please enter your last name"
        />{" "}
      </div>
      <div>
        <label htmlFor="wd-email" className="wd-email-label">
          Email:
        </label>{" "}
        <br />
        <input
          id="wd-email"
          placeholder="email"
          type="email"
          className="wd-email"
          title="Please enter your email"
        />{" "}
      </div>
      <div>
        <label htmlFor="wd-role" className="wd-role-label">
          Role:
        </label>{" "}
        <br />
        <select
          id="wd-role"
          className="wd-role"
          title="Please enter your role"
          defaultValue="FACULTY">
          <option value="STUDENT">Student</option>
          <option value="FACULTY">Faculty</option>
          <option value="ADMIN">Admin</option>
          <option value="USER">User</option>
        </select>{" "}
      </div>
      <div>
        <label htmlFor="wd-dob" className="wd-dob-label">
          Date of Birth:
        </label>{" "}
        <br />
        <input
          id="wd-dob"
          placeholder="date of birth"
          type="date"
          className="wd-dob"
          title="Please enter your date of birth"
        />{" "}
      </div>
      <Link href="/account/signin" id="wd-signout-link">
        {" "}
        Sign Out{" "}
      </Link>{" "}
    </div>
  );
}
