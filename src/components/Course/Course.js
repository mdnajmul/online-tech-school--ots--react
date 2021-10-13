import React from "react";
import "./Course.css";

const Course = (props) => {
  const { name, description, img, rating, price } = props.course;
  return (
    <div className="course">
      <img src={img} className="img-fluid" alt="" />
      <h3>{name}</h3>
      <p>{description}</p>
      <small>{price}</small>
    </div>
  );
};

export default Course;
