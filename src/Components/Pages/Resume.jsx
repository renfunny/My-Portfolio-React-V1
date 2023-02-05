import React from "react";
import "../../styles/Resume.css";
export default function Resume() {
  return (
    <main>
      <h1 className="title">Resume</h1>
      <p>
        For the full resume please{" "}
        <a href="https://docs.google.com/document/d/1MXZQQ4hTW0YqCGA961s-MfxRSACrChb-/edit?usp=sharing&ouid=106751600692304358518&rtpof=true&sd=true">
          Click Here!
        </a>
      </p>
      <p>Front-end Development:</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Third party APIs such as jQuery and Bootstrap</li>
      </ul>
      <p>Back-end Development:</p>
      <ul>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>Object-Relational-Mappers such as Sequelize and Mongoose</li>
        <li>Familiar with Model-View-Controller architecture</li>
        <li>Use of Agile methodology</li>
        <li>Familiar with MERN stack</li>
      </ul>
      <p>Development Tools:</p>
      <ul>
        <li>Git</li>
        <li>Jest unit testing</li>
        <li>Heroku</li>
        <li>Familiar with basic computer science concepts</li>
      </ul>
    </main>
  );
}
