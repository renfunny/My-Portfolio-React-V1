import React from "react";
import "../../styles/Home.css";

export default function Home() {
  return (
    <main className="home-container">
      <div className="greet-container">
        <div>
          <h1 className="home-title title">Hello World!</h1>
        </div>
        <div className="earth_container">
          <div className="earth"></div>
        </div>
      </div>
      <div>
        <h2 className="intro-container">
          I'm Renato, a Fullstack Developer with a passion for learning. I have
          worked on many small scale projects, some of which are showcased here.
          I am constantly striving to learn and improve, if you wish to to make
          any suggestions or have any learning opportunities feel free to reach
          out.
        </h2>
      </div>
    </main>
  );
}
