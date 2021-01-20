import React from "react";
import FeedbackNavigationBar from "../components/FeedbackNavigationBar";
import Feedback from '../components/Feedback';

const FeedbackPage = (props) => {

    return (
        <>
            <FeedbackNavigationBar category="FEEDBACK" />
            <Feedback total={props.location.state.total} points={props.location.state.points} />
        </>
    )
}

export default FeedbackPage;