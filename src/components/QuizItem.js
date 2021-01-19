import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const QuizItem = (props) => {

    const { item, index, active, category, name, image, onClick, id } = props;

    return (
        <Col key={item.id} onClick={onClick} className={index === active ? "col-box-active" : "col-box"} sm={4} >
            <h2 className={index === active ? "quiz-title-active" : `quiz-title quiz-title-${category}`}>{name}</h2>
            <Card key={item.id} onClick={onClick} className={index === active ? "quiz-card-active" : "quiz-card"}>
                <Card.Body onClick={onClick} className={index === active ? "quiz-card-body-active" : "quiz-card-body"}>
                    <Card.Img className={index === active ? "quiz-image-active" : "quiz-image"} src={image} />
                    <Link className={index !== active ? "link-disabled" : ""} to={{
                        pathname: `/MainQuiz/${id}`,
                        quizId: id,
                        title: name
                    }}>
                        <Button className={index === active ? "button-solve-active" : `button-solve button-solve-${category}`} variant="light">SOLVE</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default QuizItem;