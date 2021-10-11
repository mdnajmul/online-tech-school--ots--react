import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Button } from "react-bootstrap";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Slider></Slider>
        <Home></Home>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
