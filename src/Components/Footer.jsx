import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <h2>Renato &middot; Student</h2>
      <ul>
        <li>
          <a
            href="https://linkedin.com/in/renato-cordova-5bbb84211"
            target="_blank"
          >
            <FontAwesomeIcon icon={brands("linkedin")} />
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/renfunny" target="_blank">
            <FontAwesomeIcon icon={brands("github")} />
            <span className="sr-only">GitHub</span>
          </a>
        </li>
      </ul>
      <p>
        <small>&copy; 2022 Renato Cordova. All rights reserved</small>
      </p>
    </footer>
  );
}

export default Footer;
