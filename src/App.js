import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./styles/app.scss";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import MainQuiz from "./pages/MainQuiz";
import StudyQuizSection from "./pages/StudyQuizSection";
import FunQuizSection from "./pages/FunQuizSection";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home}></Route>
          <Route path="/Login" component={Login}></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/StudyQuizSection" component={StudyQuizSection}></Route>
          <Route path="/FunQuizSection" component={FunQuizSection}></Route>
          <Route path="/MainQuiz" component={MainQuiz}></Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
