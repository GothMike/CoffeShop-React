import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

import "./navbar.scss";

const NavbarPage = () => {
  return (
    <header className="header">
      <Navbar expand="lg" className="promo__navbar bg-body-tertiary">
        <Container>
          <Link className="header__link" to="/">
            <img
              alt="logo"
              src="/img/svg/coffee-beans-transperent.svg"
              width="35"
              height="35"
              className="d-inline-block align-center"
            />{" "}
            Coffee house
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="header__link" to="/products">
                Our coffee
              </Link>
              <Link className="header__link" to="/aboutUs">
                For your pleasure{" "}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavbarPage;
