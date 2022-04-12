import React from "react";
import Common from "./Common";
import web from "../src/Pictures/em2.png";

function About() {
  return (
    <div id="fondo">
      <Common
        name="Welcome to the world of"
        imgsrc={web}
        visit="/contact"
        btname="Contact Us"
      />
    </div>
  );
}

export default About;
