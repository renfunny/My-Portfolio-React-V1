import React from "react";
import "../../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Home() {
  return (
    <main>
      <h1 className="title">Projects</h1>
      <div className="project-container">
        <article className="project">
          <h2></h2>
          <a href="">
            <FontAwesomeIcon icon={brands("github")} />
          </a>
          <a href="">
            <img src="" alt="" />
          </a>
        </article>

        <article className="project">
          <h2></h2>
          <a href="">
            <FontAwesomeIcon icon={brands("github")} />
          </a>
          <a href="">
            <img src="" alt="" />
          </a>
        </article>

        <article className="project">
          <h2></h2>
          <a href="">
            <FontAwesomeIcon icon={brands("github")} />
          </a>
          <a href="">
            <img src="" alt="" />
          </a>
        </article>

        <article className="project">
          <h2></h2>
          <a href="">
            <FontAwesomeIcon icon={brands("github")} />
          </a>
          <a href="">
            <img src="" alt="" />
          </a>
        </article>
      </div>
    </main>
  );
}
