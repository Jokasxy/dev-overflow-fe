import React, {useEffect} from "react";
import QuizNavigationBar from "../components/QuizNavigationBar";
import Questions from "../components/Questions";
import { Redirect } from "react-router-dom";
//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MainQuiz = (props) => {
  
  let reloaded = localStorage.getItem("reloaded");
  useEffect(() => {
      window.addEventListener("beforeunload", alertUser);
      return () => {
          window.removeEventListener("beforeunload", alertUser);
      };
  }, []);
  const alertUser = (e) => {
      localStorage.setItem("reloaded", "true");
      e.preventDefault();
      e.returnValue = "";
  };

  return (
    reloaded === "true" ? <Redirect to="/" /> :
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
