import React from "react";
import CategoryNavigationBar from "../components/CategoryNavigationBar";
import QuizList from "../components/QuizList";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const StudyQuizSection = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <CategoryNavigationBar category="STUDYING" />
      <QuizList category="study" />
    </motion.div>
  );
};

export default StudyQuizSection;
