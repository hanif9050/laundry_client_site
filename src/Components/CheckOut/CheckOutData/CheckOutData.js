import React, { useContext } from "react";
import { userContext } from "../../../App";

const CheckOutData = ({ order }) => {
  const { _id, name, price } = order;
  const [allData, setAllData] = useContext(userContext);

  return (
    <div className="container">
      <div style={{ display: allData.display ? "none" : "block" }}>
        <h3>Service Name : {name}</h3>
        <h3>Service Charge : {price}</h3>
      </div>
    </div>
  );
};

export default CheckOutData;
