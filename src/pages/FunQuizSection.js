import React from "react";
import CategoryNavigationBar from "../components/CategoryNavigationBar";
import QuizList from "../components/QuizList";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const FunQuizSection = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="fun-quiz"
    >
      <CategoryNavigationBar category="FUN" />
      <QuizList category="fun" />
    </motion.div>
  );
};

export default FunQuizSection;
