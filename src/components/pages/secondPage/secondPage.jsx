import { Container, Row, Col } from "react-bootstrap";

import NavbarPage from "../../other/navbar/navbarPage";
import Info from "../../other/Info/info";
import FooterPage from "../../other/footer/footerPage";
import SeacrhPanel from "../../other/search-panel/search-panel";
import AppFilter from "../../other/app-filter/app-filter";
import AppItems from "../../other/app-items/app-items";

import "./secondPage.scss";

const SecondPage = ({ dataItems }) => {
  return (
    <>
      <header className="headerOther">
        <Container>
          <NavbarPage />
          <Row className="justify-content-center">
            <Col lg="auto">
              <div className="subheader">OurCoffee</div>
            </Col>
          </Row>
        </Container>
      </header>
      <Info />
      <section className="search-panel">
        <div className="search-panel_input">
          looking for <SeacrhPanel />
        </div>
        <div className="search-panel_buttons">
          or filter <AppFilter />
        </div>
      </section>
      <AppItems dataItems={dataItems} />
      <FooterPage />
    </>
  );
};

export default SecondPage;
