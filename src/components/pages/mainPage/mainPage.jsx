import NavbarPage from "../../other/navbar/navbarPage";
import FooterPage from "../../other/footer/footerPage";

import Promo from "./promo/promo";
import AboutUs from "./aboutUs/aboutUs";
import AppItems from "../../other/app-items/app-items";

import { Container, Row, Col } from "react-bootstrap";
import { Component } from "react";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataItems: [
        {
          id: 1,
          img: "../../../../img/dest/items/firstItem.webp",
          name: "Solimo Coffee Beans 2 kg",
          price: "10.73",
        },
        {
          id: 2,
          img: "../../../../img/dest/items/secondItem.webp",
          name: "Presto Coffee Beans 1 kg",
          price: "15.99",
        },
        {
          id: 3,
          img: "../../../../img/dest/items/trirdItem.webp",
          name: "AROMISTICO Coffee 1 kg",
          price: "6.99",
        },
      ],
    };
  }

  render() {
    const { dataItems } = this.props;
    const bestItems = dataItems.filter((item) => item.best === true);

    return (
      <>
        <header className="promo">
          <Container>
            <NavbarPage />
            <Row className="justify-content-center">
              <Col lg="auto">
                <Promo />
              </Col>
            </Row>
          </Container>
        </header>
        <main>
          <section className="aboutUs">
            <Container>
              <Row className="justify-content-center">
                <Col lg="auto">
                  <AboutUs />
                </Col>
              </Row>
            </Container>
          </section>

          <div className="aboutGoods">
            <AppItems dataItems={bestItems} />
          </div>
        </main>
        <FooterPage />
      </>
    );
  }
}

export default MainPage;
