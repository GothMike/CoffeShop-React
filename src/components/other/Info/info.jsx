import { Container, Row, Col } from "react-bootstrap";

import "./info.scss";

const Info = () => {
  return (
    <section className="info">
      <Container>
        <Row>
          <Col>
            <div className="info__item">
              <div className="info__img">
                <img src="../../../img/dest/other/aboutUs.webp" alt="aboutUs" />
              </div>
              <div className="info__wrapper">
                <div className="info__subheader">About our beans</div>
                <div className="newDevider">
                  <div className="newDevider__span"></div>
                  <img src="img/svg/coffee-beans-black.svg" alt="coffe-beans-black" />
                  <div className="newDevider__span"></div>
                </div>
                <p className="info__text">
                  Extremity sweetness difficult behaviour he of. On disposal of as landlord
                  horrible.
                  <br />
                  <br />
                  Afraid at highly months do things on at. Situation recommend objection do
                  intention so questions. As greatly removed calling pleased improve an. Last ask
                  him cold feel met spot shy want. Children me laughing we prospect answered
                  followed. At it went is song that held help face.
                </p>
              </div>
            </div>
            <span className="info__line"></span>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Info;
