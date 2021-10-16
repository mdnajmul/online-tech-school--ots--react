import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Slider from "./components/Slider/Slider";
import { createContext, useEffect, useState } from "react";
import Courses from "./components/Courses/Courses";
import NotFound from "./components/NotFound/NotFound";
import useCart from "./hooks/useCart";
import { addToDb, getStoredCart, removeFromDb } from "./utilities/fakeDb";
import useCourses from "./hooks/useCourses";
import OrderReview from "./components/OrderReview/OrderReview";
import AboutUs from "./components/AboutUs/AboutUs";

export const CoursesContext = createContext([]);

function App() {
  const [courses, setCourses] = useCourses();
  const [cart, setCart] = useCart(courses);
  const handleAddToCart = (course) => {
    if (!cart.includes(course)) {
      const newCart = [...cart, course];
      setCart(newCart);
      // save to local storage (for now)
      addToDb(course.id);
    } else {
      alert("Already added!");
    }
  };

  const removeToCart = (id) => {
    const newCart = cart.filter((course) => course.id !== id);
    setCart(newCart);
    removeFromDb(id);
  };

  const cartItems = Object.keys(getStoredCart());

  return (
    <CoursesContext.Provider value={courses}>
      <Router>
        <Header cart={cartItems}></Header>
        <Switch>
          <Route exact path="/">
            <Slider></Slider>
            <Home handleAddToCart={handleAddToCart}></Home>
          </Route>
          <Route path="/courses">
            <Courses handleAddToCart={handleAddToCart}></Courses>
          </Route>
          <Route path="/orderreview">
            <OrderReview
              cart={cartItems}
              removeToCart={removeToCart}
            ></OrderReview>
          </Route>
          <Route path="/aboutus">
            <AboutUs></AboutUs>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </CoursesContext.Provider>
  );
}

export default App;
