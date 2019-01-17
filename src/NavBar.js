import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-brand btn btn-link">AllTube</button>
        <button
          className="navbar-toggler btn btn-link"
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
            <li className="nav-item active">
              <Link to="/" className="nav-link ">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/TodoList" className="nav-link">
                Todo list <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/kirbycampbell">
                GitHub
              </a>
            </li>
            <li className="nav-item active">
              <Link to="/Audio" className="nav-link">
                Audio <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/Person" className="nav-link">
                Person <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Experience
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <button className="dropdown-item" href="#">
                  Coding Projects
                </button>
                <button className="dropdown-item" href="#">
                  Project Management
                </button>
                <button className="dropdown-item" href="#">
                  Photography
                </button>
              </div>
            </li>

            <li className="nav-item" />
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline my-2 my-sm-0" type="submit">
              Log Out
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default NavBar;
