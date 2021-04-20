import React, { useContext } from "react";
import { userContext } from "../../App";
import NavBar from "../SharedFolder/NavBar/NavBar";
import { useForm } from "react-hook-form";
import "./AdminLogin.css";

const AdminLogin = () => {
  const [allData, setAllData] = useContext(userContext);
  const handleAdmin = () => {
    const userInfo = { ...allData };
    userInfo.admin = true;
    setAllData(userInfo);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const adminInfo = {
      admin: data.email,
    };
    console.log("admin", adminInfo);
    fetch("https://glacial-garden-71238.herokuapp.com/adminMatch", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const userInfo = { ...allData };
          userInfo.admin = true;
          userInfo.email = "";
          userInfo.name = "";
          setAllData(userInfo);
        }
      });
  };
  return (
    <div>
      <NavBar />
      <div className="container">
        <p>
          please use this email to admin login: programminghero001@gmail.com
        </p>
        <div className="admin_height">
          <div>
            <span style={{ padding: "1rem" }}>
              {allData.admin ? (
                <h1>Welcome Admin</h1>
              ) : (
                <h1>Admin Login here</h1>
              )}
            </span>
            {allData.error && <p>{allData.error}</p>}
          </div>
          <form
            style={{ display: allData.admin ? "none" : "block" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* register your input into the hook by invoking the "register" function */}
            <input type="email" {...register("email")} />

            {/* include validation with required or other standard HTML validation rules */}
            {/* <input {...register("exampleRequired", { required: true })} /> */}
            {/* errors will return when field validation fails  */}
            {/* {errors.exampleRequired && <span>This field is required</span>} */}

            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
