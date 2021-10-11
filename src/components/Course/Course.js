import React from "react";

const Course = (props) => {
  const { name, description, img, rating, price } = props.course;
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
};

export default Course;
