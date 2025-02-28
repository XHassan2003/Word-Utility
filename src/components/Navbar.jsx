import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} ${props.greenMode === "green" ? "bg-success" : `bg-${props.mode}`}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><strong>{props.title}</strong></Link>
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
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-3`}>
            <input
              className="form-check-input"
              onClick={props.toggleGreenMode}
              type="checkbox"
              role="switch"
              id="greenModeSwitch"
              checked={props.greenMode === "green"}
              onChange={props.toggleGreenMode}
            />
            <label className="form-check-label" htmlFor="greenModeSwitch">
              Enable Green Mode
            </label>
          </div>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="darkModeSwitch"
              checked={props.mode === "dark"}
              onChange={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="darkModeSwitch">
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  greenMode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
  toggleGreenMode: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: "Set Title Here",
  aboutText: "About Text Here",
  mode: "light",
  greenMode: "light",
};
