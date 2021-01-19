import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import QuizItem from "./QuizItem";

const QuizList = (props) => {
  const [quizzes, setQuizzes] = useState([]);
  const [activeChunk, setActiveChunk] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const category = props.category;
    const getQuizzes = async () => {
      await axios
        .get("https://quiz-app-be.herokuapp.com/admin/api", {
          params: {
            operationName: null,
            query: `{allQuizzes(where:{category:${category}}){id,name,image}}`,
            variables: {},
          },
        })
        .then((response) => {
          const allQuizzes = response.data.data.allQuizzes;
          if (isMounted) setQuizzes(allQuizzes);
        })
        .catch((error) => console.error(`Error: ${error}`));
    };
    getQuizzes();
    return () => {
      isMounted = false;
    };
  }, [quizzes, props.category]);

  const filtered = quizzes.slice(activeChunk, activeChunk + 3);

  const onNextClick = () => {
    if (active === 0) {
      setActive(1);
    } else {
      setActiveChunk(activeChunk + 1);
    }
  };

  const onPrevClick = () => {
    if (activeChunk !== 0) setActiveChunk(activeChunk - 1);
    else {
      setActive(0);
    }
  };

  const onClick = (i) => {
    if (i !== active) {
      if (active === 0) setActive(1);
      if (i === 2) {
        setActiveChunk(activeChunk + 1);
      } else if (i === 0) {
        if (activeChunk !== 0) setActiveChunk(activeChunk - 1);
        else setActive(0);
      }
    }
  };

  const content = filtered.map((item, i) => {
    return (
      <>
        <QuizItem
          onClick={() => onClick(i)}
          item={item}
          active={active}
          category={props.category}
          index={i}
          id={item.id}
          name={item.name}
          image={item.image}
        />
      </>
    );
  });

  return (
    <Container className="quizlist-container">
      <div className="arrow-box">
        <Row className="row-box">
          {content}

          <div
            onClick={onPrevClick}
            className={`ellipse prev ${props.category}-ellipse ${
              activeChunk === 0 && active === 0 ? "prev-hidden" : ""
            }`}
          >
            <div className="arrow-left"></div>
          </div>
          <div
            onClick={onNextClick}
            className={`ellipse next ${props.category}-ellipse ${
              activeChunk >= quizzes.length - 2 && active === 1
                ? "next-hidden"
                : ""
            }`}
          >
            <div className="arrow-right"></div>
          </div>
        </Row>
      </div>
    </Container>
  );
};

export default QuizList;
