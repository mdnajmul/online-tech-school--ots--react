import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Slider from "./components/Slider/Slider";
import { createContext, useEffect, useState } from "react";
import Courses from "./components/Courses/Courses";
import NotFound from "./components/NotFound/NotFound";

export const CoursesContext = createContext([]);

function App() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./courses.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <CoursesContext.Provider value={courses}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Slider></Slider>
            <Home></Home>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
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
