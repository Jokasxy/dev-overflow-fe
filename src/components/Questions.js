import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import Question from "./Question";

const Questions = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([
    { answers: [{}], correct: [{}] },
  ]);
  const [quizTitle, setQuizTitle] = useState("");

  useEffect(() => {
    let isMounted = true;

    const getQuestions = async () => {
      const quizId = props.quizId;
      await axios
        .get("https://quiz-app-be.herokuapp.com/admin/api", {
          params: {
            operationName: null,
            query: `{allQuizzes{id,name,questions{id,image,description,answers{id,name}, correct{id}}, feedback{id,name,image,description,category}}}`,
            variables: {},
          },
        })
        .then((response) => {
          const allQuestions = response.data.data.allQuizzes;
          const data = allQuestions.filter((item) => {
            return item.id === quizId;
          });
          const questionsData = data[0].questions;
          const title = data[0].name;
          if (isMounted) {
            setQuestions(questionsData);
            setQuizTitle(title);
          }
        })
        .catch((error) => console.error(`Error: ${error}`));
    };
    getQuestions();
    return () => {
      isMounted = false;
    };
  }, [questions, props.quizId]);

  const clicked = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  return (
    <Container className="questions">
      <Question
        correct={questions[currentQuestion].correct.id}
        onClick={clicked}
        number={currentQuestion + 1}
        question={questions[currentQuestion].description}
        answers={questions[currentQuestion].answers}
        image={questions[currentQuestion].image}
        title={quizTitle}
        last={currentQuestion + 1 === questions.length ? true : false}
      />
    </Container>
  );
};

export default Questions;
