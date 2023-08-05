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

      dataContent: [
        {
          name: "SecondPage",
          img: "../../../img/dest/other/aboutUs.webp",
          alt: "aboutYourPleasaure",
          subheader: "About our goods",
          text: " Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.",
        },
        {
          name: "ThirdPage",
          img: "../../../img/dest/other/forYouPlesaure.webp",
          alt: "aboutOutBeans",
          subheader: "About our beans",
          text: " Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.",
        },
      ],
    };
  }

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  searchItem = (items, term) => {
    term = term.toLowerCase(); // приведение искомого термина к нижнему регистру

    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.country.toLowerCase().indexOf(term) > -1; // приведение имени каждого элемента к нижнему регистру перед сравнением
    });
  };
  render() {
    const { dataItems, dataContent, term } = this.state;
    const visibleData = this.searchItem(dataItems, term);

    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage dataItems={dataItems} />} />
          <Route
            path="/aboutGoods"
            element={
              <SecondPage
                onUpdateSearch={this.onUpdateSearch}
                dataContent={dataContent}
                dataItems={visibleData}
              />
            }
          />
          <Route
            path="/aboutUs"
            element={<ThirdPage dataContent={dataContent} dataItems={dataItems} />}
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
