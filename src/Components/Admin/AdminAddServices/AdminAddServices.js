import React, { useState } from "react";
import { useForm } from "react-hook-form";

import spinner from "../../../images/Spinner/Spinner.gif";
import "./AdminAddServices.css";

const AdminAddServices = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [productAdd, setProductAdd] = useState(false);
  const onSubmit = (data) => {
    const eventData = {
      name: data.serviceName,
      price: data.price,
      imageUrl: imageUrl,
      description: data.description,
    };
    console.log(eventData);
    fetch("https://glacial-garden-71238.herokuapp.com/addService", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setProductAdd(true);
          reset();
        }
      });
  };
  const handleChange = (e) => {
    setLoading(true);
    console.log(e.target.files[0]);
    let data = new FormData();
    data.set("key", "c4f42a74473474a55e9ad17be94816a7");
    data.append("image", e.target.files[0]);
    fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.display_url);
        setImageUrl(data.data.display_url);
        setLoading(false);
      });
  };
  setTimeout(() => {
    setProductAdd(false);
  }, 3000);
  return (
    <div className="addProductContainer">
      <h1>Add Service Here</h1>
      {productAdd && <h1>Product Added Successfully</h1>}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div className=" p-3 my-3">
          <input
            className="form-control form-control-lg"
            placeholder="Service Name"
            {...register("serviceName", { required: true })}
          />
          {errors.serviceName && <span>This field is required</span>}
          {/* include validation with required or other standard HTML validation rules */}
        </div>
        <div className=" p-3 my-3">
          <textarea
            placeholder="Service Description"
            className="form-control form-control-lg"
            type="text-area"
            rows="10"
            cols="18"
            {...register("description", { required: true })}
          />
          {/* errors will return when field validation fails  */}

          {errors.description && <span>This field is required</span>}
        </div>
        <div className=" p-3 my-3">
          <input
            placeholder="Service Fee"
            className="form-control form-control-lg"
            type="number"
            {...register("price", { required: true })}
          />
          {/* errors will return when field validation fails  */}

          {errors.price && <span>This field is required</span>}
        </div>
        <div className=" p-3 my-3">
          {loading && <img src={spinner} alt="Loading" />}
          {/* input file */}
          <input
            className="form-control form-control-lg"
            name="pic"
            type="file"
            required
            onChange={handleChange}
          />
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

export default AdminAddServices;
