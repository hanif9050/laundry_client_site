import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProcessPayment from "../ProcessPayment/ProcessPayment";
import NavBar from "../SharedFolder/NavBar/NavBar";
import CheckOutAddress from "./CheckOutAddress/CheckOutAddress";
import CheckOutData from "./CheckOutData/CheckOutData";

const CheckOut = () => {
  const { serviceId } = useParams();
  const [checkOutItem, setCheckOutItem] = useState([]);

  useEffect(() => {
    fetch(`https://glacial-garden-71238.herokuapp.com/checkOut/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setCheckOutItem(data));
  }, [serviceId]);

  return (
    <div className="container">
      <NavBar />
      <h1>This is Checkout</h1>
      {/* {checkOutItem.map((order) => {
        return <CheckOutData order={order} key={order._id} />;
      })} */}
      <CheckOutData order={checkOutItem} />

      <CheckOutAddress {...checkOutItem} />
    </div>
  );
};

export default CheckOut;
