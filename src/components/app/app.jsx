import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/mainPage/mainPage";
import OurCoffee from "../pages/ourCoffeePage/ourCoffee";
import AboutUs from "../pages/aboutUsPage/aboutUs";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../scss/index.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<OurCoffee />} />
          <Route path="/contact" element={<AboutUs />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
