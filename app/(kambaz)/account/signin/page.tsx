import Link from "next/link";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
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
      <Link href="/dashboard" id="wd-signin-link">
        {" "}
        Sign In{" "}
      </Link>{" "}
      <br />
      <Link href="/account/signup" id="wd-signup-link">
        {" "}
        Sign Up{" "}
      </Link>
    </div>
  );
}
