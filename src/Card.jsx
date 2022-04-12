import React from "react";
import { NavLink } from "react-router-dom";

function Card({ title, imgsrc, parrafo }) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card bg-white">
          <img src={imgsrc} className="card-img-top bg-light" alt="..." />
          <div className="card-body text-white bg-dark">
            <h5 className="card-title bg-dark">{title}</h5>
            <p className="card-text bg-dark">{parrafo}</p>
            <NavLink to="/contact" className="btn btn-outline-light">
              Get Quote
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
