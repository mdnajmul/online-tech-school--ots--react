import React, { useContext } from "react";
import { CoursesContext } from "../../App";
import Course from "../Course/Course";
import "./Courses.css";

const Courses = () => {
  const allCourses = useContext(CoursesContext);
  return (
    <section className="container mt-3">
      <h3 className="text-center fw-bold mb-3" style={{ color: "black" }}>
        {" "}
        সকল কোর্স সমূহ{" "}
      </h3>
      <div className="course-container">
        {allCourses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </section>
  );
};

export default Courses;
