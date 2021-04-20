import React from "react";
import { Link } from "react-router-dom";
import "./SingleServices.css";
const SingleServices = ({ service }) => {
  const { _id, name, price, imageUrl, description } = service;
  console.log(service);
  return (
    <div className="col-md-4 pb-5">
      <div className="card effect-main" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <span>
            <h4 className="text-warning">Price: {price}</h4>
          </span>
          <Link to={`/checkOut/${_id}`} className="btn btn-primary effect">
            Take Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleServices;
