import React, { useContext } from "react";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { userContext } from "../../App";
import NavBar from "../SharedFolder/NavBar/NavBar";
import { useHistory, useLocation } from "react-router";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [allData, setAllData] = useContext(userContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    console.log("click");
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user.email);
        console.log(user.displayName);
        const userInfo = { ...allData };
        userInfo.email = user.email;
        userInfo.name = user.displayName;
        userInfo.admin = false;
        setAllData(userInfo);
        history.replace(from);

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
      });
  };
  const handleAdminLogin = () => {
    history.push("/admin");
  };
  return (
    <div>
      <NavBar />
      <div className="login">
        {allData.name && <h1>Welcome, {allData.name}</h1>}
        <button
          style={{ display: allData.email ? "none" : "block" }}
          className="  btn btn-primary"
          onClick={handleSignIn}
        >
          Sign In With Google
        </button>
        <div className="m-5">
          <button
            style={{
              display: allData.email || allData.admin ? "none" : "block",
            }}
            className="  btn btn-primary"
            onClick={handleAdminLogin}
          >
            Admin Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
