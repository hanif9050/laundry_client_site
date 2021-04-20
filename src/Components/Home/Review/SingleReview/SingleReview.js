import React from "react";
import { Link } from "react-router-dom";

const SingleReview = ({ review }) => {
  return (
    <div className="card mb-5" style={{ width: " 18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Post BY : {review.name}</h5>
        <p className="card-text">{review.review}</p>
      </div>
    </div>
  );
};

export default SingleReview;
