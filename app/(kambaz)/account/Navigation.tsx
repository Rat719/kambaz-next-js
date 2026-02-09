import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";

export default function AccountNavigation() {
  return (
    <ListGroup className="wd list-group fs-5 rounded-0">
      <Link
        href="/account/signin"
        id="wd-signin-link"
        className="list-group-item border-0 text-danger"
      >
        Signin
      </Link>
      <Link
        href="/account/signup"
        id="wd-signup-link"
        className="list-group-item border-0 text-danger"
      >
        Signup
      </Link>
      <Link
        href="/account/profile"
        id="wd-profile-link"
        className="list-group-item border-0 text-danger"
      >
        Profile
      </Link>
    </ListGroup>
  );
}