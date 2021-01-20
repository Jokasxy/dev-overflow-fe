import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/app.scss";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import MainQuiz from "./pages/MainQuiz";
import FeedbackPage from "./pages/FeedbackPage";
import StudyQuizSection from "./pages/StudyQuizSection";
import FunQuizSection from "./pages/FunQuizSection";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/Login" component={Login}></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/StudyQuizSection" component={StudyQuizSection}></Route>
          <Route path="/FunQuizSection" component={FunQuizSection}></Route>
          <Route path="/MainQuiz" component={MainQuiz}></Route>
          <Route path="/Feedback" component={FeedbackPage}></Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
