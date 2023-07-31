import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./navbar.scss";

const NavbarPage = () => {
  return (
    <Navbar expand="lg" className="promo__navbar bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src="/img/svg/coffee-beans-transperent.svg"
            width="35"
            height="35"
            className="d-inline-block align-center"
          />{" "}
          Coffee house
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">Our coffee</Nav.Link>
            <Nav.Link href="/contact">For your pleasure </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarPage;
