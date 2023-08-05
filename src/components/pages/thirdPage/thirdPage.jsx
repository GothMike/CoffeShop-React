import { Container, Row, Col } from "react-bootstrap";
import NavbarPage from "../../other/navbar/navbarPage";
import Info from "../../other/Info/info";
import FooterPage from "../../other/footer/footerPage";
import AppItems from "../../other/app-items/app-items";

import "./thirdPage.scss";

const ThirdPage = ({ dataItems, dataContent }) => {
  return (
    <>
      <header className="headerThirdPage">
        <Container>
          <NavbarPage />
          <Row className="justify-content-center">
            <Col lg="auto">
              <div className="subheader">For your pleasure</div>
            </Col>
          </Row>
        </Container>
      </header>
      <Info dataContent={dataContent} dataContentPage={"ThirdPage"} />
      <AppItems dataItems={dataItems} />
      <FooterPage />
    </>
  );
};

export default ThirdPage;
