import React from "react";
import fun from "../img/FunSvg.svg";
import study from "../img/StudySvg.svg";
import arrow from "../img/right-arrow-in-circular-button.svg";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { categoryStudyAnimation, categoryFunAnimation } from "../animation";
import { motion } from "framer-motion";

const Category = () => {
  return (
    <Container>
      <Row>
        <Col className="study-column" sm={6}>
          <motion.div
            variants={categoryStudyAnimation}
            initial="hidden"
            animate="show"
            className="category-single"
          >
            <h2>STUDY</h2>
            <div className="white-box">
              <img className="study" src={study} alt="study" />
              <Link className="arrow" to="/StudyQuizSection">
                <img src={arrow} alt="circle-arrow" />
              </Link>
            </div>
          </motion.div>
        </Col>
        <Col className="study-column" sm={6}>
          <motion.div
            variants={categoryFunAnimation}
            initial="hidden"
            animate="show"
            className="category-single"
          >
            <h2>FUN</h2>
            <div className="white-box">
              <img className="fun" src={fun} alt="study" />
              <Link className="arrow" to="/FunQuizSection">
                <img src={arrow} alt="circle-arrow" />
              </Link>
            </div>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Category;
