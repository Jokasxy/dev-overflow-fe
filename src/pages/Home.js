import React from "react";
import NavigationBar from "../components/NavigationBar";
import Category from "../components/Category";
//animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation.js";

const Home = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <NavigationBar />
      <Category />
    </motion.div>
  );
};

export default Home;
