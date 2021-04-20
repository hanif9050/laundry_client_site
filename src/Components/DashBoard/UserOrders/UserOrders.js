import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../../App";

const UserOrders = () => {
  const [allData, setAllData] = useContext(userContext);
  const [userOrder, setUserOrder] = useState([]);
  useEffect(() => {
    fetch(
      `https://glacial-garden-71238.herokuapp.com/userOrders/${allData.email}`
    )
      .then((res) => res.json())
      .then((data) => setUserOrder(data));
  }, []);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Service Name</th>
            <th scope="col">Service Charge</th>
            <th scope="col">Transection Id</th>
            <th scope="col">Order Time</th>
          </tr>
        </thead>
        <tbody>
          {userOrder.map((order, index) => {
            return (
              <tr key={order._id}>
                <th scope="row">{index + 1}</th>
                <td>{order.productName}</td>
                <td>{order.productPrice}</td>
                <td>{order.paymentId}</td>
                <td>{order.orderTime}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserOrders;
