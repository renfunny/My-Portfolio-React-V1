import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav nav-tabs">
        <li className="logo">
          <a href="#" className="nav-link">
            <span className="link-text logo-text">Renato Cordova</span>
            <FontAwesomeIcon
              icon={solid("sun")}
              className="link-icon logo-icon"
            />
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            <FontAwesomeIcon icon={solid("house")} className="link-icon" />
            <span className="link-text">Home</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#project"
            onClick={() => handlePageChange("Project")}
            className={
              currentPage === "Project" ? "nav-link active" : "nav-link"
            }
          >
            <FontAwesomeIcon icon={solid("briefcase")} className="link-icon" />
            <span className="link-text">Projects</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            <FontAwesomeIcon
              icon={solid("address-card")}
              className="link-icon"
            />
            <span className="link-text">About</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            <FontAwesomeIcon
              icon={solid("address-book")}
              className="link-icon"
            />
            <span className="link-text">Contact</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            <FontAwesomeIcon icon={solid("file")} className="link-icon" />
            <span className="link-text">Resume</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
