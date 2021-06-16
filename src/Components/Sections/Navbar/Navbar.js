import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../../App";
import Dashboard from "../../Dashboard/Dashboard";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand fw-5" to="/">
          My World
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
        {loggedInUser.email ? (
          <button type="button" className="btn btn-warning px-4">
            <Dashboard />
          </button>
        ) : (
          <button type="button" className="btn btn-warning px-4">
            <Link style={{ textDecoration: "none" }} to="/login">
              Log in
            </Link>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
