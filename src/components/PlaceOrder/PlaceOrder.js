import React from "react";
import img from "../../images/place_order.gif";

const PlaceOrder = () => {
  return (
    <div>
      <h2 className="text-center mt-3 mb-3 text-success fw-bold">
        Thank You! Your Order Completed
      </h2>
      <div className="text-center">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default PlaceOrder;
