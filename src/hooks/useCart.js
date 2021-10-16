import { useState, useEffect } from "react";
import { getStoredCart } from "../utilities/fakeDb";

const useCart = (courses) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (courses.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        const addedCourse = courses.find((course) => course.id === key);
        if (addedCourse) {
          storedCart.push(addedCourse);
        }
      }
      setCart(storedCart);
    }
  }, [courses]);

  return [cart, setCart];
};

export default useCart;
