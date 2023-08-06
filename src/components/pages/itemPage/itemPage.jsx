import { Container, Row, Col } from "react-bootstrap";

import NavbarPage from "../../other/navbar/navbarPage";
import FooterPage from "../../other/footer/footerPage";

import Item from "../../other/item/item";

import "../secondPage/secondPage.scss";

const ItemPage = ({ dataItems }) => {
  const currentPath = window.location.pathname; // Находим путь из поисковой строки

  const id = parseInt(currentPath.match(/\d+/)); // Используем регулярное выражение для поиска цифры

  const item = dataItems.find((item) => item.id === id);
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
      <Item item={item} />
      <FooterPage />
    </>
  );
};

export default ItemPage;
