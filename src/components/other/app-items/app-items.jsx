import AppItem from "../app-item/app-item";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./app-items.scss";

const AppItems = ({ dataItems }) => {
  const elements = dataItems.map((elem) => {
    const { id, ...elemProps } = elem;

    return (
      <Link key={id} to={`/products/${id}`}>
        <AppItem key={id} {...elemProps} />
      </Link>
    );
  });

  return (
    <>
      <section className="products">
        <Container>
          <div className="products__header">Our best</div>
          <div className="products__items">{elements}</div>
        </Container>
      </section>
    </>
  );
};

export default AppItems;
