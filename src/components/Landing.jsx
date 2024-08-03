import React from "react";
import "./styles.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";

function Landing() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
}

export default Landing;
