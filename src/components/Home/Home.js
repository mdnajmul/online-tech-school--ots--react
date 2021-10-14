import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Course from "../Course/Course";
import "./Home.css";
import { CoursesContext } from "../../App";

const Home = () => {
  const allCourses = useContext(CoursesContext);
  const homeCourses = allCourses.slice(0, 6);
  return (
    <section className="container mt-5">
      <div className="d-flex justify-content-between mb-3">
        <h3 style={{ color: "black" }}>- প্রিমিয়াম কোর্স গুলো -</h3>
        <h3>
          <NavLink className="text-decoration-none nav-menu-clr" to="/courses">
            সব কোর্স সমূহ <FontAwesomeIcon icon={faArrowRight} />
          </NavLink>
        </h3>
      </div>
      <div className="home-container">
        {homeCourses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </section>
  );
};

export default Home;
