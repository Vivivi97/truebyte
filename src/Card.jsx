import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function Card({ title, imgsrc, parrafo }) {
  return (
      <div className="col-md-4 col-10 mx-auto">
        <div className="card bg-white">
          <img src={imgsrc} className="card-img-top bg-light" alt={title} />
          <div className="card-body text-white bg-dark">
            <h5 className="card-title bg-dark">{title}</h5>
            <p className="card-text bg-dark">{parrafo}</p>
            <NavLink to="/contact" className="btn btn-outline-light">
              Get Quote
            </NavLink>
          </div>
        </div>
      </div>
  );
}

// PropTypes para validación de props
Card.propTypes = {
  title: PropTypes.string.isRequired,
  imgsrc: PropTypes.string.isRequired,
  parrafo: PropTypes.string.isRequired,
};

export default Card;
export { Card };