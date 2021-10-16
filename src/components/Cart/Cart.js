import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cart.css";

const Cart = (props) => {
  // destructuring cart value
  const { cart } = props;

  let quantity = props.cart.length;
  let total = 0;

  // set total cost
  for (const course of cart) {
    total = total + parseFloat(course.price);
  }

  return (
    <div className="cart-container pt-5 pb-5">
      <h3 className="text-center mt-3 text-success fw-bold">Order Summary</h3>
      <hr className="me-5 ms-5 fw-bold" />
      <h5 className="text-center mt-1">
        <span className="text-info fw-bold">Courses Ordered:</span>{" "}
        <span>{quantity}</span>
      </h5>
      <p className="text-center mt-1">
        <span className="text-info fw-bold">Total Cost:</span>{" "}
        <span className="fw-bold">{total} টাকা</span>
      </p>
    </div>
  );
};

export default Cart;
