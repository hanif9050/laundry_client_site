import React, { useContext, useState } from "react";
import { userContext } from "../../App";
import Admin from "../Admin/Admin";
import Review from "../Home/Review/Review";
import MakeAnAdmin from "../MakeAnAdmin/MakeAnAdmin";
import NavBar from "../SharedFolder/NavBar/NavBar";
import UserReview from "../UserReview/UserReview";
import "./DashBoard.css";
import UserOrders from "./UserOrders/UserOrders";
const DashBoard = () => {
  const [allData, setAllData] = useContext(userContext);
  const [adminAdd, setAdminAdd] = useState(false);
  const [adminManage, setAdminManage] = useState(true);
  const [adminOrderList, setAdminOrderList] = useState(false);
  const [reviewToggle, setReviewToggle] = useState(false);
  const [makeAdmin, setMakeAdmin] = useState(false);
  const handleAdd = () => {
    setAdminAdd(!adminAdd);
    setAdminManage(false);
    setAdminOrderList(false);
    setMakeAdmin(false);

    console.log(adminAdd);
  };
  const handleManage = () => {
    setAdminManage(!adminManage);
    setAdminOrderList(false);
    setAdminAdd(false);
    setMakeAdmin(false);

    console.log(adminManage);
  };
  const handleOrderList = () => {
    setAdminOrderList(!adminOrderList);
    setAdminAdd(false);
    setAdminManage(false);
    setMakeAdmin(false);
  };
  const handleMakeAdmin = () => {
    setMakeAdmin(!makeAdmin);
    setAdminAdd(false);
    setAdminManage(false);
    setAdminOrderList(false);
  };
  const handleReview = () => {
    setReviewToggle(!reviewToggle);
  };

  return (
    <div className="container ">
      <NavBar />
      <h1>This is Dash Board</h1>

      <div className="sideBar">
        <div className="bg-danger">
          {!allData.email && (
            <button type="button" onClick={handleManage}>
              Manage Service
            </button>
          )}
          {!allData.email && (
            <button type="button" onClick={handleAdd}>
              Add Service
            </button>
          )}
          {!allData.email && (
            <button type="button" onClick={handleOrderList}>
              Orders
            </button>
          )}
          {!allData.email && (
            <button type="button" onClick={handleMakeAdmin}>
              Make An Admin
            </button>
          )}
          {allData.email && (
            <button onClick={handleReview}>
              {allData.email && !reviewToggle ? "Review" : "Order List"}
            </button>
          )}
        </div>
        <div className="bg-warning">
          {allData.email && !allData.admin && !reviewToggle && <UserOrders />}
          {allData.email && reviewToggle && <UserReview />}
          {allData.admin && (
            <Admin
              adminOrderList={adminOrderList}
              adminAdd={adminAdd}
              adminManage={adminManage}
              makeAdmin={makeAdmin}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
