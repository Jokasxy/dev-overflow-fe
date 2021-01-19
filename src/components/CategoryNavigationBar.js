import React from "react";
import login from "../img/Contact.svg";
import about from "../img/Info.svg";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoryNavigationBar = (props) => {
  return (
    <Container className="nav-container">
      <Navbar className={`navbar2 ${props.category}`}>
        <Navbar.Brand as={Link} to="/">
          <h1>Quizzos</h1>
        </Navbar.Brand>
        <Nav.Item className="return">
          <Nav.Link as={Link} to="/">
            <div className="arrow-back"></div>
          </Nav.Link>
          <div className="category">{props.category}</div>
        </Nav.Item>
        <Nav.Item className="login-about">
          <Nav.Link>
            <img src={login} alt="login-icon" />
          </Nav.Link>
          <Nav.Link>
            <img src={about} alt="about-icon" />
          </Nav.Link>
        </Nav.Item>
      </Navbar>
    </Container>
  );
};

export default CategoryNavigationBar;
