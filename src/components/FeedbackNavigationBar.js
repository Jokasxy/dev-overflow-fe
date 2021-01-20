import React from "react";
import login from "../img/Contact.svg";
import about from "../img/Info.svg";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const FeedbackNavigationBar = (props) => {
    return (
        <Container className="nav-container">
            <Navbar className={`navbar2 ${props.category}`}>
                <Navbar.Brand as={Link} to="/">
                    <h1>Quizzos</h1>
                </Navbar.Brand>
                <Nav.Item>
                    <div className="description">
                        <h2 className="quiz-done">YOU'VE FINISHED THE QUIZ!</h2>
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

export default FeedbackNavigationBar;
