import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Admin from "./Components/Admin/Admin";
import CheckOut from "./Components/CheckOut/CheckOut";
import Login from "./Components/Login/Login";
import DashBoard from "./Components/DashBoard/DashBoard";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AdminLogin from "./Components/AdminLogin/AdminLogin";
export const userContext = createContext();

function App() {
  const [allData, setAllData] = useState({});
  return (
    <userContext.Provider value={[allData, setAllData]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/admin">
            <AdminLogin></AdminLogin>
          </Route>
          <PrivateRoute path="/dashBoard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <PrivateRoute path="/checkOut/:serviceId">
            <CheckOut></CheckOut>
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
