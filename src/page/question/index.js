import React, {useEffect, useLayoutEffect, useState} from "react";
import request from "../../utils/auth";
import "./question.css"
import {useSelector} from "react-redux";
import {selectUser} from "../../features/userSlice";

function QuestComponent () {
    let user = useSelector(selectUser)
    const [questions, setQuestion] = useState([])
    const [answer, setAnswer] = useState("")
    const [score, setScore] = useState(0)

    useLayoutEffect(() => {
        request
            .get('questions', {
                params: {
                    page: 1,
                    limit: 4
                },
                headers: {
                    Authorization: `Bearer ${user.user.tokens.access.token}`
                }
            })
            .then((res) => {
                // setQuestion(res.data.results)
                console.log(res.data.results)
            })
    },[questions])
    const handleClick = (e) =>{
        setAnswer(e.target.textContent)
    }
    // useEffect(()=>{
    //     if(answer==="A"){
    //         setScore(score+1)
    //     }
    //     else if(answer==="B"){
    //         setScore(score+2)
    //     }
    //     setAnswer("")
    // },[answer])
    return(
        <div className="section">
            {/*<h1 className="question">{questions[0].question}</h1>*/}
            {/*<ul className="answer-list">*/}
            {/*    <li className="answer" onClick={handleClick}>{questions[0].answer1}</li>*/}
            {/*    <li className="answer" onClick={handleClick}>{questions[0].answer2}</li>*/}
            {/*    <li className="answer" onClick={handleClick}>{questions[0].answer3}</li>*/}
            {/*    <li className="answer" onClick={handleClick}>{questions[0].answer4}</li>*/}
            {/*</ul>*/}
            <h2 className="score">Your score {score}</h2>
        </div>
    )
}

export default QuestComponent