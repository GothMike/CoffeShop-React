import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./footer.scss";

const FooterPage = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <ul className="footer__links">
              <li className="footer__link">
                <Link to="/">
                  <img
                    alt="logo"
                    src="/img/svg/coffee-beans-footer.svg"
                    width="35"
                    height="35"
                    className="d-inline-block align-center"
                  />{" "}
                  Coffee house
                </Link>
              </li>
              <li className="footer__link">
                <Link to="/products">Our coffee</Link>
              </li>
              <li className="footer__link">
                <Link to="/aboutUs">For your pleasure</Link>
              </li>
            </ul>
            <div className="devider devider_black">
              <img src="../../../img/svg/coffee-beans-black.svg" alt="coffe-beans-black" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterPage;
