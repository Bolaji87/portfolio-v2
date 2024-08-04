import React from "react";
import "./styles.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";

function Landing() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default Landing;
