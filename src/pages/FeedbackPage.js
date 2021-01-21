import React from "react";
import FeedbackNavigationBar from "../components/FeedbackNavigationBar";
import Feedback from "../components/Feedback";
//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const FeedbackPage = (props) => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <FeedbackNavigationBar category="FEEDBACK" />
      <Feedback
        total={props.location.state.total}
        points={props.location.state.points}
      />
    </motion.div>
  );
};

export default FeedbackPage;
