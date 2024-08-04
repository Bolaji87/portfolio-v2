import React from "react";
import "./styles.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";

function Landing() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
    </div>
  );
}

export default Landing;
