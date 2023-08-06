import { Container, Row, Col } from "react-bootstrap";

import "./item.scss";

const Item = ({ item }) => {
  const descr =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <section className="item">
      <Container>
        <Row className="item__wrapper">
          <Col md={{ offset: 1 }}>
            <div className="item__img">
              <img src="../../img/dest/items/itemForAll.webp" alt="photo_item" />
            </div>
          </Col>
          <Col>
            <div className="item__card">
              <div className="item__header">About it</div>
              <div className="newDevider">
                <div className="newDevider__span"></div>
                <img src="../img/svg/coffee-beans-black.svg" alt="coffe-beans-black" />
                <div className="newDevider__span"></div>
              </div>
              <div className="item__country">
                <span>Country:</span> {item.country}
              </div>
              <div className="item__descr">
                <span>Description:</span> {descr}
              </div>
              <div className="item__price">
                <span>Price:</span> {item.price}$
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Item;
