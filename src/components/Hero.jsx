import React from "react";
import "./styles.css";
function Hero() {
  return (
    <>
      <div id="hero-section">
        <div className="hero-content">
          <div>
            <h2>Hi</h2>
            <h1>I'm Bolaji</h1>
            <h1>
              <span id="change-a">a</span> frontend developer
            </h1>
            <p>
              I am a passionate web developer with 3 years of experience in
              building responsive and user-friendly websites and applications. I
              specialize in JavaScript, React.js, Next.js etc.
            </p>
            <div className="hero-content-btns">
              <button>Hire me</button>
              <button>My work</button>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="./bolaji.jpg" alt="Bolaji image" />
        </div>
      </div>
      {/* <hr className="custom-hr" /> */}
    </>
  );
}

export default Hero;
