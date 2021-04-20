import React, { useEffect, useState } from "react";

const AllOrderList = () => {
  const [allService, setAllService] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    fetch("https://glacial-garden-71238.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setAllService(data));
  }, [allService, refresh]);
  const handleUpdate = (id) => {
    console.log(id);
  };
  const handleChange = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1>All orders</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Order id</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Price</th>
            <th scope="col">Payment ID</th>
            <th scope="col">Order Time</th>
          </tr>
        </thead>
        <tbody>
          {allService.map((service, index) => {
            return (
              <tr key={service._id}>
                <th scope="row">{index + 1}</th>
                <td>{service._id}</td>
                <td>{service.productName}</td>
                <td>{service.productPrice}</td>
                <td>{service.paymentId}</td>
                <td>{service.orderTime}</td>

                <td>
                  <form onChange={handleChange}>
                    <label htmlFor="cars">Choose a car:</label>
                    <select id="cars" name="cars">
                      <option value="volvo">Pending</option>
                      <option value="saab">On Going</option>
                      <option value="fiat">Done</option>
                    </select>
                    <button
                      type="button"
                      onClick={() => handleUpdate(service._id)}
                    >
                      update
                    </button>
                  </form>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllOrderList;
