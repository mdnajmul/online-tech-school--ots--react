import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Cart = (props) => {
  // destructuring cart value
  const { cart } = props;

  let quantity = props.cart.length;
  let total = 0;

  // set total cost
  for (const course of cart) {
    total = total + course.price;
  }

  return (
    <div>
      {console.log(quantity)}
      {console.log(total)}
    </div>
  );
};

export default Cart;
