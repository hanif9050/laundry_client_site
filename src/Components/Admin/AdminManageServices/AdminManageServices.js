import React, { useEffect, useState } from "react";
import { useFormState } from "react-hook-form";

const AdminManageServices = () => {
  const [allService, setAllService] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    fetch("https://glacial-garden-71238.herokuapp.com/allServices")
      .then((res) => res.json())
      .then((data) => setAllService(data));
  }, [allService, refresh]);
  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://glacial-garden-71238.herokuapp.com/deleteService/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result) {
          setRefresh(true);
        }
      });
  };
  return (
    <div>
      <h1>Admin Manage Services</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Service id</th>
            <th scope="col">Service Name</th>
            <th scope="col">Service Charge</th>
          </tr>
        </thead>
        <tbody>
          {allService.map((service, index) => {
            return (
              <tr key={service._id}>
                <th scope="row">{index + 1}</th>
                <td>{service._id}</td>
                <td>{service.name}</td>
                <td>{service.price}</td>

                <td>
                  <button
                    type="button"
                    onClick={() => handleDelete(service._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminManageServices;
