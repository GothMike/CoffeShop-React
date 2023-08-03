import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/mainPage/mainPage";
import SecondPage from "../pages/secondPage/secondPage";
import ThirdPage from "../pages/thirdPage/thirdPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../scss/index.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataItems: [
        {
          id: 1,
          img: "../../../../img/dest/items/secondItem.webp",
          name: "Solimo Coffee Beans 2 kg",
          country: "Brazil",
          price: "10.73",
          best: true,
        },
        {
          id: 2,
          img: "../../../../img/dest/items/firstItem.webp",
          name: "AROMISTICO Coffee 1 kg",
          country: "Kenya",
          price: "6.99",
          best: false,
        },
        {
          id: 3,
          img: "../../../../img/dest/items/trirdItem.webp",
          name: "AROMISTICO Coffee 1 kg",
          country: "Columbia",
          price: "6.99",
          best: false,
        },
        {
          id: 4,
          img: "../../../../img/dest/items/firstItem.webp",
          name: "Solimo Coffee Beans 2 kg",
          country: "Brazil",
          price: "10.73",
          best: true,
        },
        {
          id: 5,
          img: "../../../../img/dest/items/secondItem.webp",
          name: "Presto Coffee Beans 1 kg",
          country: "Columbia",
          price: "15.99",
          best: false,
        },

        {
          id: 6,
          img: "../../../../img/dest/items/firstItem.webp",
          name: "Presto Coffee Beans 1 kg",
          country: "Kenya",
          price: "15.99",
          best: true,
        },
      ],
      term: "",
      filter: "all",
    };
  }

  render() {
    const { dataItems } = this.state;

    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage dataItems={dataItems} />} />
          <Route path="/aboutGoods" element={<SecondPage dataItems={dataItems} />} />
          <Route path="/aboutUs" element={<ThirdPage dataItems={dataItems} />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
