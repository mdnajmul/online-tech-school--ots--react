import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Button } from "react-bootstrap";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Slider></Slider>
        <Button></Button>
        <h2>Education</h2>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
