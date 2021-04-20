import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { userContext } from "../../../App";
import ProcessPayment from "../../ProcessPayment/ProcessPayment";
const CheckOutAddress = ({ _id, name, price }) => {
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
  const [shippingData, setShippingData] = useState(null);
  const [allData, setAllData] = useContext(userContext);
  const onSubmit = (data) => {
    // console.log(formData);
    setShippingData(data);
    console.log(shippingData);
    const userInfo = { ...allData };
    userInfo.display = true;
    setAllData(userInfo);

    // console.log(data);
    // const eventData = {
    //   productName: name,
    //   productPrice: price,
    //   client: data.clientName,
    //   address: data.address,
    // };
    // console.log(eventData);
    // fetch("https://glacial-garden-71238.herokuapp.com/addOrder", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(eventData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data) {
    //       setProductAdd(true);
    //       reset();
    //     }
    //   });
  };
  console.log(shippingData);

  const handlePaymentSuccess = (paymentId) => {
    // console.log(data);
    const eventData = {
      productName: name,
      productPrice: price,
      client: shippingData.clientName,
      email: allData.email,
      paymentId,
      address: shippingData.address,
      orderTime: new Date(),
    };
    console.log(eventData);
    fetch("https://glacial-garden-71238.herokuapp.com/addOrder", {
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
  setTimeout(() => {
    setProductAdd(false);
  }, 3000);
  return (
    <div className="container">
      {productAdd && <h1>Order Placed Successfully</h1>}
      <div
        style={{ display: shippingData ? "none" : "block" }}
        className="w-25"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <div className=" p-3 my-3">
            <input
              className="form-control form-control-lg"
              placeholder="Your Name"
              {...register("clientName", { required: true })}
            />
            {errors.serviceName && <span>This field is required</span>}
            {/* include validation with required or other standard HTML validation rules */}
          </div>
          <div className=" p-3 my-3">
            <textarea
              placeholder="Address"
              className="form-control form-control-lg"
              type="text-area"
              rows="10"
              cols="10"
              {...register("address", { required: true })}
            />
            {/* errors will return when field validation fails  */}

            {errors.description && <span>This field is required</span>}
          </div>

          <div className=" p-3 my-3">
            <input
              className="form-control form-control-lg btn-primary"
              type="submit"
            />
          </div>
        </form>
      </div>
      <div
        style={{ display: shippingData ? "block" : "none" }}
        className="w-50"
      >
        <ProcessPayment handlePaymentSuccess={handlePaymentSuccess} />
      </div>
    </div>
  );
};

export default CheckOutAddress;
