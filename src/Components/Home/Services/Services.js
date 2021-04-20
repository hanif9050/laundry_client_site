import React, { useEffect, useState } from "react";
import ImgCurtain from "../../../images/curtain.jpg";
import ImgIron from "../../../images/iron.jpg";
import ImgWedding from "../../../images/wedding show.jpg";
import ImgLeather from "../../../images/leather side.jpg";
import SingleServices from "./SingleServices/SingleServices";

const serviceData = [
  {
    id: 1,
    title: "CURTAINS",
    img: ImgCurtain,
  },
  {
    id: 2,
    title: "DRY CLEANING",
    img: ImgIron,
  },
  {
    id: 3,
    title: "WEDDING GOWNS",
    img: ImgWedding,
  },
  {
    id: 4,
    title: "LEATHER & SUEDE",
    img: ImgLeather,
  },
];

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://glacial-garden-71238.herokuapp.com/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container">
      <div className="d-flex justify-content-center my-5 py-5">
        <h1>Our Services</h1>
      </div>
      <div className="row">
        {services.map((service) => (
          <SingleServices key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
