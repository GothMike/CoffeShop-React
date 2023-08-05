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
    this.state = {};
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
