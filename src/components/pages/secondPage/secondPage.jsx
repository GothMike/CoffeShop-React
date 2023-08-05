import { Container, Row, Col } from "react-bootstrap";

import NavbarPage from "../../other/navbar/navbarPage";
import Info from "../../other/Info/info";
import FooterPage from "../../other/footer/footerPage";
import AppSeacrhPanel from "../../other/app-search-panel/app-search-panel";
import AppFilter from "../../other/app-filter/app-filter";
import AppItems from "../../other/app-items/app-items";

import "./secondPage.scss";

const SecondPage = ({ dataItems, dataContent, onUpdateSearch }) => {
  return (
    <>
      <header className="headerSecondPage">
        <Container>
          <NavbarPage />
          <Row className="justify-content-center">
            <Col lg="auto">
              <div className="subheader">Our Coffee</div>
            </Col>
          </Row>
        </Container>
      </header>
      <Info dataContent={dataContent} dataContentPage={"SecondPage"} />
      <section className="search-panel">
        <div className="search-panel_input">
          looking for <AppSeacrhPanel onUpdateSearch={onUpdateSearch} />
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
