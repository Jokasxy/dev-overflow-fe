import React from "react";
import QuizNavigationBar from "../components/QuizNavigationBar";
import Questions from "../components/Questions";
//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MainQuiz = (props) => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <QuizNavigationBar title={props.location.title} />
      <Questions quizId={props.location.quizId} />
    </motion.div>
  );
};

export default MainQuiz;
