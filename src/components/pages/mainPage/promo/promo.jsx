import { Button } from "react-bootstrap";

const Promo = () => {
  return (
    <>
      <h1 className="promo__header">Everything You Love About Coffee</h1>
      <div className="devider">
        <img src="img/svg/coffee-beans-white.svg" alt="coffe-beans-white" />
      </div>
      <h2 className="promo__subheader">
        We makes every day full of energy and taste <br />
        Want to try our beans?
      </h2>
      <div className="promo__button">
        <Button variant="outline-light">More</Button>{" "}
      </div>
    </>
  );
};

export default Promo;
