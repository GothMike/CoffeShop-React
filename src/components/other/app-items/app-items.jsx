import AppItem from "../app-item/app-item";
import { Container } from "react-bootstrap";

import "./app-items.scss";

const AppItems = ({ dataItems }) => {
  const elements = dataItems.map((elem) => {
    const { id, ...elemProps } = elem;
    return <AppItem key={id} {...elemProps} />;
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
