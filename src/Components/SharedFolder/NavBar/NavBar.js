import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container" style={{ display: "block" }}>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin">
              Admin
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/dashBoard">
              Dash Board
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
