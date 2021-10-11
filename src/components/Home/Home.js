import React, { useEffect, useState } from "react";
import Course from "../Course/Course";

const Home = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./courses.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <h2>Home</h2>
      {courses.map((course) => (
        <Course key={course.id} course={course}></Course>
      ))}
    </div>
  );
};

export default Home;
