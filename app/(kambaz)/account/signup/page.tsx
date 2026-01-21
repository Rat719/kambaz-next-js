import Link from "next/link";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <div>
        <label htmlFor="wd-username" className="wd-username-label">
          Username:
        </label>{" "}
        <br />
        <input
          id="wd-username"
          placeholder="username"
          className="wd-username-classname"
          title="Please enter your username"
        />{" "}
      </div>
      <div>
        <label htmlFor="wd-password" className="wd-password-label">
          Password:
        </label>{" "}
        <br />
        <input
          id="wd-password"
          placeholder="password"
          type="password" // Ensures the input is masked
          className="wd-password-classname"
          title="Please enter your password"
        />{" "}
      </div>
      <div>
        <label htmlFor="wd-verify-password" className="wd-password-label">
          Verify Password:
        </label>{" "}
        <br />
        <input
          id="wd-verify-password"
          placeholder="password"
          type="password" // Ensures the input is masked
          className="wd-verify-password-classname"
          title="Please enter your password again"
        />{" "}
      </div>
      <Link href="/account/profile" id="wd-signup-link">
        {" "}
        Sign Up{" "}
      </Link>{" "}
      <br />
      <Link href="/account/signin" id="wd-signin-link">
        {" "}
        Sign In{" "}
      </Link>
    </div>
  );
}
