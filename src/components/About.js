import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">About
    <h2>About Me</h2>
    <p>My name is {image.name} and I am a web developer.</p>
    <img src={image} alt="I made this" />
  </div>
  );
}

export default About;
