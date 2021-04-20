import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <ul className="d-flex justify-content-around cutom-style">
          <li>
            <a href="http://">Facebook</a>
          </li>
          <li>
            <a href="http://">Youtube</a>
          </li>
          <li>
            <a href="http://">Twitter</a>
          </li>
        </ul>
        <div className="d-flex justify-content-center">
          <p>Copy Right @ 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
