import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg">
              <NavLink className="navbar-brand" to="/">
                TrueByte.
              </NavLink>
              <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                  <NavLink className="navbar-brand" to="/service">
                    Services
                  </NavLink>
                  <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  </li>
                  <li className="nav-item">
                  <NavLink className="navbar-brand" to="/about">
                    About Us
                  </NavLink>
                  <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  </li>
                  <li className="nav-item">
                  <NavLink className="navbar-brand" to="/contact">
                    Contact Us
                  </NavLink>
                  <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
