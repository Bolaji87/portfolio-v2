import React from "react";
import "./styles.css";
function Landing() {
  return (
    <div>
      <NavBar />
      <Hero />
    </div>
  );
}

function NavBar() {
  return (
    <div id="nav-bar">
      <h1>
        Bo<span className="la">la</span>
        <span className="ji">ji</span>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
        </ul>
      </nav>
      <button>
        <a href="#">Contact</a>
      </button>
    </div>
  );
}
function Hero() {
  return (
    <div id="hero-section">
      <div className="hero-content">
        <div>
          <h2>Hi</h2>
          <h1>I'm Bolaji</h1>
          <h1>
            <span id="change-a">a</span> frontend developer
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, id
            culpa quo sed inventore alias amet dicta fugit dolores nisi facere
            dolor esse ducimus minima, necessitatibus voluptatum! Doloremque,
            aspernatur distinctio.
          </p>
          <div className="hero-content-btns">
            <button>Hire me</button>
            <button>Contact</button>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="./bolaji.jpg" alt="Bolaji image" />
      </div>
    </div>
  );
}
function Projects() {
  return <div>he</div>;
}
export default Landing;
