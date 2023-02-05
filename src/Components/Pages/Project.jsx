import React from "react";
import "../../styles/Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import GitUpPic from "../../images/GitUp-Screenshot.png";
import GuessNumber from "../../images/Guess-my-number-screenshot.png";
import LocalLibrary from "../../images/Local-Library-Screenshot.png";
import PasswordGenerator from "../../images/passwordGenerator-Screenshot.png";

const styles = {
  GitUpBgr: {
    backgroundImage: `url(${GitUpPic})`,
  },
  GuessNumBgr: {
    backgroundImage: `url(${GuessNumber})`,
  },
  LocalLibraryBgr: {
    backgroundImage: `url(${LocalLibrary})`,
  },
  PasswrdGenBgr: {
    backgroundImage: `url(${PasswordGenerator})`,
  },
};
const Project = (props) => {
  return (
    <article className="project" style={props.bgr}>
      <div className="content">
        <a href={props.projectLink} className="project-link">
          <h2 className="project-text">{props.projectName}</h2>
        </a>
        <a href={props.projectGithub} className="github-link">
          <FontAwesomeIcon icon={brands("github")} />
        </a>
      </div>
    </article>
  );
};

export default function Home() {
  return (
    <main>
      <h1 className="title">Projects</h1>
      <div className="project-container">
        <Project
          bgr={styles.GitUpBgr}
          projectLink={"https://renfunny.github.io/GitUp.Now/"}
          projectName={"GitUp.Now"}
          projectGithub={"https://github.com/renfunny/GitUp.Now"}
        />
        <Project
          bgr={styles.GuessNumBgr}
          projectLink={"https://renfunny.github.io/guess-my-number/"}
          projectName={"Guess Number Game"}
          projectGithub={"https://github.com/renfunny/guess-my-number"}
        />
        <Project
          bgr={styles.LocalLibraryBgr}
          projectLink={"https://the-local-library.herokuapp.com/"}
          projectName={"Local Library"}
          projectGithub={"https://github.com/Kikolock/Online-Library"}
        />
        <Project
          bgr={styles.PasswrdGenBgr}
          projectLink={"https://renfunny.github.io/password-generator/"}
          projectName={"Password Generator"}
          projectGithub={"https://github.com/renfunny/password-generator"}
        />
      </div>
    </main>
  );
}
