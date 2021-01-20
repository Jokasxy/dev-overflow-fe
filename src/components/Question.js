import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { motion } from "framer-motion";
import { textAnimation } from "../animation";

const Question = (props) => {
  const { number, question, image, answers, onClick, correct, last } = props;

  const [uncheck, setUncheck] = useState(false);
  const [chosenId, setChosenId] = useState(0);
  const [checked, setChecked] = useState([false, false, false, false]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [nextClicked, setNextClicked] = useState(false);

  const changed = (id, i) => {
    let arr = [false, false, false, false];
    arr[i] = true;
    setUncheck(false);
    setChecked(arr);
    setChosenId(id);
  };

  return showFeedback ? (
    <Redirect to={{
      pathname: "/Feedback",
      state: {
        points: correctAnswers,
        total: number
        }
    }}/>
  ) : (
    <Container className="question-page-container">
      <img className="question-img" src={image} alt="question" />
      <div className="question">
        <div className="question-desc">
          <div className="question-number-circle">
            <div className="question-number">{number}</div>
          </div>
          <motion.div
            variants={textAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            className="question-text"
          >
            {question}
          </motion.div>
        </div>
        <Form className="answers">
          <Form.Group>
            {answers.map((item, i) => {
              return (
                <Form.Check key={`${item.id}${i}`} id={item.id} type="radio">
                  <Form.Check.Input
                    onChange={() => changed(item.id, i)}
                    className={`answer-radio radio  
                ${item.id === correct && nextClicked ? "green" : ""} 
                ${item.id !== correct && nextClicked ? "red" : ""}`}
                    name="radio"
                    id={item.id}
                    type="radio"
                    checked={uncheck ? false : checked[i]}
                  />
                  <Form.Check.Label className="answer-label">
                    {item.name}
                  </Form.Check.Label>
                </Form.Check>
              );
            })}
          </Form.Group>
          <Button
            className="btn-next"
            onClick={() => {
              if (chosenId === correct) {
                setCorrectAnswers(correctAnswers + 1);
                setChosenId(0);
              }
              setNextClicked(true);
              setTimeout(function () {
                onClick();
                setUncheck(true);
                setNextClicked(false);
                if (last) {
                  setShowFeedback(true);
                }
              }, 1000);
            }}
            variant="primary"
          >
            NEXT
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Question;
