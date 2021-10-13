import React from "react";
import Rating from "react-rating";
import "./Course.css";

const Course = (props) => {
  const { name, description, img, rating, price } = props.course;
  return (
    <div className="course">
      <img src={img} className="img-fluid" alt="" />
      <h3 className="text-center fs-5 fw-bold ps-3 pe-3">{name}</h3>
      <p className="text-center fs-6 ps-3 pe-3">{description}</p>
      <p className="ps-3 pe-3">
        <hr />
      </p>
      <p className="text-center">
        <Rating
          initialRating={rating}
          emptySymbol="far fa-star icon-color"
          fullSymbol="fas fa-star icon-color"
          readonly
        ></Rating>
      </p>
      <small>{price}</small>
    </div>
  );
};

export default Course;
