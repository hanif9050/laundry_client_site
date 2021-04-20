import React, { useState } from "react";
import { useForm } from "react-hook-form";

const UserReview = () => {
  const [reviewSucces, setReviewSucces] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://glacial-garden-71238.herokuapp.com/addReview", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          reset();
          setReviewSucces(true);
        }
      });
  };
  setTimeout(() => {
    setReviewSucces(false);
  }, 3000);
  return (
    <div>
      <h1>Review</h1>
      {reviewSucces && <p>Review Submit Successfully</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}

        <div className=" p-3 my-3">
          <textarea
            placeholder="Enter Your Review"
            className="form-control form-control-lg"
            type="text-area"
            rows="5"
            cols="5"
            {...register("review", { required: true })}
          />
          {/* errors will return when field validation fails  */}

          {errors.review && <span>This field is required</span>}
        </div>
        <div className=" p-3 my-3">
          <input
            className="form-control form-control-lg"
            placeholder="Your Name"
            {...register("name", { required: true })}
          />
          {errors.serviceName && <span>This field is required</span>}
          {/* include validation with required or other standard HTML validation rules */}
        </div>
        {/* include validation with required or other standard HTML validation rules */}

        <div className=" p-3 my-3">
          <input
            className="form-control form-control-lg btn-primary"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default UserReview;
