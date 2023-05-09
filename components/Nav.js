import { useState, useEffect } from "react";

import { NavLink } from "./NavLink";
import { userService } from "../services";
import Link from "next/link";

export { Nav };

function Nav() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  function logout() {
    userService.logout();
  }

  // only show nav when logged in
  if (!user) return null;

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="navbar-nav">
        <NavLink href={"/"} exact className="nav-item nav-link">
          Home
        </NavLink>
        <span>
          <Link href={"/"} onClick={logout} className="nav-item nav-link">
            Logout
          </Link>
        </span>
        <NavLink href="/users" className="nav-item nav-link">Users</NavLink>
      </div>
    </nav>
  );
}
