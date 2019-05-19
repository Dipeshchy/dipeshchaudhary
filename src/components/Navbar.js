import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <NavLink className="navbar-brand" to="/">
            Dipesh
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" activeClassName="active">
                  About Me
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/skills">
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/education">
                  Education
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/services">
                  Services
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
