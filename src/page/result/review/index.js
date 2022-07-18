import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectScore} from "../../../reducers/score";
import {resetAnswer, selectQuestion} from "../../../reducers/data";
import "./review.css"
import {useNavigate} from "react-router-dom";
function ReviewPage () {

    const questions = useSelector(selectQuestion)
    const scores = useSelector(selectScore)
    const navigate= useNavigate()
    const dispatch = useDispatch()


    function handleClickRestart () {
        dispatch(resetAnswer())
        navigate('/question')
    }

    return(
        <div className="review-container">
            <h1>Review Your Answer</h1>
        <table className="review-table">
            <tr>
                <th className="review-th">No.</th>
                <th className="review-th">Question</th>
                <th className="review-th">Answer</th>
                <th className="review-th">Result</th>
            </tr>
            {scores.marks.map((mark, index) => {
                return(
                    <tr key={mark.id}>
                        <td className="review-td">{index + 1}</td>
                        <td className="review-td" >{questions[index].question}</td>
                        <td className="review-td">{mark.correctanswer}</td>
                        <td className="review-td" style={{color: (mark.result && "green") || "red"}}>{mark.result.toString()}</td>
                    </tr>
                )
            })}
        </table>
            <button className="restart-btn" onClick={handleClickRestart}>Restart</button>
        </div>
    )
}

export default ReviewPage;