import React, { useState } from "react";
import { useForm } from "react-hook-form";

const MakeAnAdmin = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [addAdmin, setAddAdmin] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://glacial-garden-71238.herokuapp.com/addAdmin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setAddAdmin(true);
          reset();
        }
      });
  };
  return (
    <div>
      {addAdmin && <p>Admin Added Successfully</p>}
      <h1>Make Admin </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div className=" p-3 my-3">
          <input
            className="form-control form-control-lg"
            placeholder="Email"
            {...register("admin", { required: true })}
          />
          {errors.serviceName && <span>This field is required</span>}
          {/* include validation with required or other standard HTML validation rules */}
        </div>

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

export default MakeAnAdmin;
