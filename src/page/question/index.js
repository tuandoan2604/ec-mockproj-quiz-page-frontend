import React, {useEffect, useLayoutEffect, useState} from "react";
import request from "../../utils/auth";
import "./question.css"
import {useDispatch, useSelector} from "react-redux";
import {logout, refresh, selectTokens, selectUser} from "../../features/userSlice";
import {Tabs, Tab, TabPanel, TabList} from "react-tabs";
import {getQuestion, selectQuestion} from "../../features/quizzSlice";
import {useNavigate} from "react-router-dom";
import {modifyAnswer, selectAnswer} from "../../features/answerSlice";

function QuestComponent () {
    const [tabIndex, setTabIndex] = useState(0)
    const tokens = useSelector(selectTokens);
    const questions = useSelector(selectQuestion)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const answer = useSelector(selectAnswer)
    useLayoutEffect(() => {
        request
        .get('questions', {
            params: {
                page: 1,
                limit: 10
            },
            headers: {
                Authorization: `Bearer ${tokens.access.token}`
            }
        })
        .then(res => {
            dispatch(
                getQuestion( res.data.results))
        })
            .catch( () => {
                dispatch(logout())
                navigate('/', {replace: true})
                }
            )
    },[])

    function handleAnsClick (props, e) {
        dispatch(modifyAnswer({
            id: props.id,
            answer: e.target.textContent
        }))
    }

    function handleSubmit () {
        // request
        //     .post()

    }
    console.log(answer)
    return(
        <div className="quizz-container">
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="quizz-nav">
                    {questions.map((question,index) =>
                        <Tab className="quizz-id">
                            {index+1}
                        </Tab>)}
                </TabList>
                {questions.map(question =>
                    <TabPanel className="quizz-panel">
                        <h1>{question.question}</h1>
                        <button className="answer-btn" onClick={(e) => {
                            handleAnsClick(question,e)
                            if(tabIndex<9) setTabIndex(tabIndex+1)
                        }}> {question.answer1}</button>
                        <button className="answer-btn" onClick={(e) => {
                            handleAnsClick(question,e)
                            if(tabIndex<9) setTabIndex(tabIndex+1)
                            }}> {question.answer2}</button>
                    <button className="answer-btn" onClick={(e) => {
                            handleAnsClick(question,e)
                            if(tabIndex<9) setTabIndex(tabIndex+1)
                        }}> {question.answer3}</button>
                    <button className="answer-btn" onClick={(e) => {
                            handleAnsClick(question,e)
                            if(tabIndex<9) setTabIndex(tabIndex+1)
                        }}> {question.answer4}</button>
                        </TabPanel>)}
            </Tabs>
            <div className="tab-nav-btn">
                {(tabIndex>0) && <button id="prev" onClick={() => {if(tabIndex>0) setTabIndex(tabIndex-1)}}>Prev</button>}
                {(tabIndex<9) && <button id="next" onClick={() => {if(tabIndex<9) setTabIndex(tabIndex+1)}}>Next</button>}
                {(tabIndex == 9) && <button id="submit" onClick={() => {}}>Submit</button>}

            </div>
        </div>
    )
}

export default QuestComponent