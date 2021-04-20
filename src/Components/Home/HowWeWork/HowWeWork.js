import React from "react";
import img1 from "../../../images/1work.png";
import img2 from "../../../images/2work.png";
import img3 from "../../../images/3work.png";
import WorkData from "./WorkData/WorkData";
const workData = [
  { id: 1, title: "WE PICK YOUR CLOTHES", icon: img1 },
  { id: 2, title: "QUICKER DELIVERY", icon: img2 },
  { id: 3, title: "DELIVERY AT THE DOORSTEP!", icon: img3 },
];
const HowWeWork = () => {
  return (
    <div className="container py-5 my-5">
      <div className="row d-flex justify-content-center">
        <h6 className="text-center">Clean Job Always</h6>
        <h1 className="text-center">This is How we Work</h1>
        {workData.map((work) => {
          return <WorkData key={work.id} work={work} />;
        })}
      </div>
    </div>
  );
};

export default HowWeWork;
