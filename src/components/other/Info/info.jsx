import { Container, Row, Col } from "react-bootstrap";

import "./info.scss";

const Info = ({ dataContent, dataContentPage }) => {
  const name = dataContentPage;
  const filteredData = dataContent.filter((item) => item.name === name);

  return (
    <section className="info">
      <Container>
        <Row>
          <Col>
            <div className="info__item">
              <div className="info__img">
                <img src={filteredData[0].img} alt={filteredData[0].alt} />
              </div>
              <div className="info__wrapper">
                <div className="info__subheader">{filteredData[0].subheader}</div>
                <div className="newDevider">
                  <div className="newDevider__span"></div>
                  <img src="img/svg/coffee-beans-black.svg" alt="coffe-beans-black" />
                  <div className="newDevider__span"></div>
                </div>
                <p className="info__text">{filteredData[0].text}</p>
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
