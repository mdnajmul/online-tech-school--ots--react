import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Button></Button>
      </Router>

      <h2>Education</h2>
    </div>
  );
}

export default App;
