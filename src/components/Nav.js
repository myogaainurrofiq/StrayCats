import React, { Component } from "react";
import { Link } from "react-router-dom";


class Nav extends Component {
  render() {
    return (
      <div className="nav-container" style={{ padding: "20px" }}>
        <nav
          className="navbar navbar-expand-lg fixed-bottom navbar-dark bg-dark "
          style={{ backgroundClip: "padding-box" }}
        >
          <div className="container-sm">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active" style={{ paddingLeft: "110px" }}>
                  <Link className="nav-link" to="/">
                  <i className="fa fa-home"></i>{" "}
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item" style={{ paddingLeft: "720px" }}>
                  <Link className="nav-link" to="/profile">
                  <i className="fa fa-user"></i>{" "}
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
