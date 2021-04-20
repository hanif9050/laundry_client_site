import React from "react";

const WorkData = ({ work }) => {
  console.log(work);
  return (
    <div className="col-md-4 p-2 w-25">
      <div className="d-flex flex-column align-items-center p-5">
        <img style={{ width: "100px" }} src={work.icon} alt="" />
        <h3>{work.title}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, neque quis? Dicta tempora repudiandae culpa.
        </p>
      </div>
    </div>
  );
};

export default WorkData;
