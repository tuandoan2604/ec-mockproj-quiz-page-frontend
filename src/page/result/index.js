import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {selectScore} from "../../reducers/score";
import {resetAnswer} from "../../reducers/data";
import "./result.css"
import {useNavigate} from "react-router-dom";

function ResultPage () {
    const score=useSelector(selectScore)
    const navigate=useNavigate()
    const dispatch = useDispatch()

    function handleClickReview () {
        navigate('./review')
    }
    function handleClickRestart () {
        dispatch(resetAnswer())
        navigate('/question')
    }

    return(
        <div className="score-container">
            <h2>Your score is</h2>
            <h1>{score.score}</h1>
            <div className="score-nav-btn">
                <button className="review-btn" onClick={handleClickReview}>Review</button>
                <button className="restart-btn" onClick={handleClickRestart}>Restart</button>
            </div>
        </div>
    )
}
export default ResultPage