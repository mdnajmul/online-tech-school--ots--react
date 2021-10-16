import React from "react";
import useCourses from "../../hooks/useCourses";
import Review from "../Review/Review";
import Cart from "../Cart/Cart";
import "./OrderReview.css";

const OrderReview = (props) => {
  // destructuring cart value
  const { cart, removeToCart, handlePlaceOrder } = props;
  const [courses, setCourses] = useCourses();

  const storedCart = [];
  for (const key in cart) {
    const addedCourse = courses.find((course) => course.id == cart[key]);
    if (addedCourse) {
      storedCart.push(addedCourse);
    }
  }

  return (
    <div className="mt-5">
      {storedCart.length > 0 ? (
        <div className="shop-container">
          <div className="course-container">
            {storedCart.map((cart) => (
              <Review
                key={cart.id}
                cart={cart}
                removeToCart={removeToCart}
              ></Review>
            ))}
          </div>
          <div>
            <Cart cart={storedCart} handlePlaceOrder={handlePlaceOrder}></Cart>
          </div>
        </div>
      ) : (
        <h1 className="text-center text-danger fw-bold"> No Course Found!</h1>
      )}
    </div>
  );
};

export default OrderReview;
