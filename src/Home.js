import React from "react";
import Common from "./Common";
import web from "../src/Pictures/em1.png";

function Home() {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={web}
        visit="/service"
        btname="Get started"
      />
    </>
  );
}

export default Home;
