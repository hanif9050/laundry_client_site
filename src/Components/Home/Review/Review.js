import React, { useEffect, useState } from "react";
import imgRev1 from "../../../images/curtain.jpg";
import imgRev2 from "../../../images/leather side.jpg";
import imgRev3 from "../../../images/iron.jpg";
import SingleReview from "./SingleReview/SingleReview";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://glacial-garden-71238.herokuapp.com/allReview")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-center my-5 py-5">
        <h1>Reviews</h1>
      </div>
      <div className="row justify-content-between">
        {reviews.map((review) => (
          <SingleReview key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Review;
