import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
//animations
import { motion } from "framer-motion";
import {
  percAnimation,
  textAnimation,
  imgAnimation,
  finishAnimation,
} from "../animation.js";

const Feedback = (props) => {
  const { points, total } = props;
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [css, setCss] = useState("");
  const percentage = Math.floor((points / total) * 100);

  useEffect(() => {
    let isMounted = true;
    const getFeedback = async () => {
      await axios
        .get("https://quiz-app-be.herokuapp.com/admin/api", {
          params: {
            operationName: null,
            query: `{allQuizzes{feedback{id,name,image,description,category}}}`,
            variables: {},
          },
        })
        .then((response) => {
          const allFeedback = response.data.data.allQuizzes[0].feedback;
          const [excellent, good, ok, bad, terrible] = allFeedback;
          if (isMounted) {
            if (percentage === 0) {
              setImage(terrible.image);
              setDescription("You answered all the questions wrong...");
            } else if (percentage > 0 && percentage < 20) {
              setImage(terrible.image);
              setDescription(terrible.description);
            } else if (percentage >= 20 && percentage < 40) {
              setImage(bad.image);
              setDescription(bad.description);
              setCss(`resized-bad`);
            } else if (percentage >= 40 && percentage < 65) {
              setImage(ok.image);
              setDescription(ok.description);
              setCss(`moved`);
            } else if (percentage >= 65 && percentage < 90) {
              setImage(good.image);
              setDescription(good.description);
            } else if (percentage >= 90 && percentage <= 100) {
              setImage(excellent.image);
              setDescription(excellent.description);
              setCss(`resized-excellent`);
            }
          }
        })
        .catch((error) => console.error(`Error: ${error}`));
    };
    getFeedback();
    return () => {
      isMounted = false;
    };
  }, [percentage]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: "easeOut",
        staggerChildren: 1,
      },
    },
  };
  return (
    <Container>
      <Row
        as={motion.Row}
        variants={container}
        initial="hidden"
        animate="show"
        className="feedback"
      >
        <Col as={motion.Col} className="feedback-img-column" sm={4}>
          <motion.img
            variants={imgAnimation}
            className={css}
            src={image}
            alt=""
          />
        </Col>
        <Col className="feedback-desc-column" sm={6}>
          <motion.div>
            <motion.p variants={textAnimation} className="feedback-description">
              {description}
            </motion.p>
          </motion.div>
          <motion.div variants={percAnimation} className="circle">
            <p className="percentage">
              {percentage}
              <span>%</span>
            </p>
          </motion.div>
        </Col>
        <Col
          as={motion.Col}
          variants={finishAnimation}
          className="finish-btn"
          sm={2}
        >
          <Link className="finish-link" to="/">
            <p>FINISH</p>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
export default Feedback;
