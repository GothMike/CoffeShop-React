import { Container, Row, Col } from "react-bootstrap";
import NavbarPage from "../../other/navbar/navbarPage";
import Info from "../../other/Info/info";
import FooterPage from "../../other/footer/footerPage";
import AppItems from "../../other/app-items/app-items";

const ThirdPage = () => {
  const { dataItems } = this.state;

  return (
    <>
      <header className="headerOther">
        <Container>
          <NavbarPage />
          <Row className="justify-content-center">
            <Col lg="auto">
              <div className="subheader">For your pleasure</div>
            </Col>
          </Row>
        </Container>
      </header>
      <Info />
      <AppItems dataItems={dataItems} />
      <FooterPage />
    </>
  );
};

export default ThirdPage;
