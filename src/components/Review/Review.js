import React from "react";
import { Button } from "react-bootstrap";
import Rating from "react-rating";

const Review = (props) => {
  const { id, name, description, img, price, rating, totalClass } = props.cart;
  const { removeToCart } = props;
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
      <div className="d-flex justify-content-around">
        <p>কোর্স ফি: {price} টাকা</p>
        <p>ক্লাস: {totalClass} টি</p>
      </div>
      <p className="ps-3 pe-3">
        <hr />
      </p>
      <p className="text-center">
        <Button onClick={() => removeToCart(id)}>কোর্সটি ডিলিট করুন</Button>
      </p>
    </div>
  );
};

export default Review;
