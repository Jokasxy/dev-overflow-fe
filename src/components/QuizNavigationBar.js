import React from "react";
import login from "../img/Contact.svg";
import about from "../img/Info.svg";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const QuizNavigationBar = (props) => {
    return (
        <Container className="nav-container">
            <Navbar>
                <Navbar.Brand as={Link} to="/"><h1>Quizzos</h1></Navbar.Brand>
                <Nav.Item className="nav-quiz-title">
                    {props.title}
                </Nav.Item>
                <Nav.Item className="login-about">
                    <Nav.Link as={Link} to="/Login">  <img src={login} alt="login-icon" /></Nav.Link>
                    <Nav.Link as={Link} to="/About">  <img src={about} alt="about-icon" /></Nav.Link>
                </Nav.Item>
            </Navbar>
        </Container>
    )
}

export default QuizNavigationBar;