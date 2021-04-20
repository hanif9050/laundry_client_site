import React from "react";
import MakeAnAdmin from "../MakeAnAdmin/MakeAnAdmin";
import AdminAddServices from "./AdminAddServices/AdminAddServices";
import AdminManageServices from "./AdminManageServices/AdminManageServices";
import AllOrderList from "./AllOrderList/AllOrderList";

const Admin = ({ adminAdd, adminManage, adminOrderList, makeAdmin }) => {
  return (
    <div>
      <h1>This is Admin</h1>
      {adminAdd && <AdminAddServices />}
      {adminManage && <AdminManageServices />}
      {adminOrderList && <AllOrderList />}
      {makeAdmin && <MakeAnAdmin />}
    </div>
  );
};

export default Admin;
