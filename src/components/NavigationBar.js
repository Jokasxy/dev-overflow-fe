import React from "react";
import login from "../img/Contact.svg";
import about from "../img/Info.svg";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { descriptionAnimation } from "../animation";
import { motion } from "framer-motion";
const NavigationBar = () => {
  return (
    <Container className="nav-container">
      <Navbar>
        <Navbar.Brand as={Link} to="/">
          <h1>Quizzos</h1>
        </Navbar.Brand>
        <Nav.Item>
          <div className="description">
            <motion.p variants={descriptionAnimation}>
              Choose a subject and expand
            </motion.p>
          </div>
          <div className="description" style={{ margin: 0 }}>
            <motion.p variants={descriptionAnimation}>your knowledge!</motion.p>
          </div>
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

export default NavigationBar;
