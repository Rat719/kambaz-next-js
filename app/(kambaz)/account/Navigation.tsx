"use client";

import Link from "next/link";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function AccountNavigation() {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );

  return (
    <Nav variant="pills" className="flex-column">
      <NavItem>
        <NavLink as={Link} href="/account/signin">Signin</NavLink>
      </NavItem>

      <NavItem>
        <NavLink as={Link} href="/account/signup">Signup</NavLink>
      </NavItem>

      <NavItem>
        <NavLink as={Link} href="/account/profile">Profile</NavLink>
      </NavItem>

      {currentUser && currentUser.role === "ADMIN" && (
        <NavItem>
          <NavLink as={Link} href="/account/users">Users</NavLink>
        </NavItem>
      )}
    </Nav>
  );
}