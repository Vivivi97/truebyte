import React from "react";
import Card from "./Card";
import em3 from "../src/Pictures/em3.png";
import em4 from "../src/Pictures/em4.png";
import em5 from "../src/Pictures/em5.png";
import em6 from "../src/Pictures/em6.png";
import em7 from "../src/Pictures/em7.png";
import em8 from "../src/Pictures/em8.png";

function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center text-white">Our Services</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Card title="Android Development" imgsrc={em3} parrafo="Some quick example text to build on the card title and make up the bulk of the card's content."/>
              <Card title="Web Development" imgsrc={em4} parrafo="Some quick example text to build on the card title and make up the bulk of the card's content."/>
              <Card title="Database Management" imgsrc={em5} parrafo="Some quick example text to build on the card title and make up the bulk of the card's content."/>
              <Card title="Business Analytics" imgsrc={em6} parrafo="Some quick example text to build on the card title and make up the bulk of the card's content."/>
              <Card title="Digital Marketing" imgsrc={em7} parrafo="Some quick example text to build on the card title and make up the bulk of the card's content."/>
              <Card title="Video Creation" imgsrc={em8} parrafo="Some quick example text to build on the card title and make up the bulk of the card's content."/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
