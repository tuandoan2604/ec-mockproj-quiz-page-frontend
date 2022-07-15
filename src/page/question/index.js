import React, {useLayoutEffect, useState} from "react";
import request from "../../utils/auth";
import "./question.css"
import {useDispatch, useSelector} from "react-redux";
import {selectTokens, tokenRefresh} from "../../reducers/user";
import {Tabs, Tab, TabPanel, TabList} from "react-tabs";
import {fetchQuestion, selectQuestion, updateAnswer} from "../../reducers/data";
import {useNavigate} from "react-router-dom";
import {updateScore} from "../../reducers/score";
import LoadingComponent from "../../component/loading";

function QuestComponent () {
    const [isLoading, setLoading] = useState(false)
    const [tabIndex, setTabIndex] = useState(0)
    const tokens = useSelector(selectTokens);
    const questions = useSelector(selectQuestion)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const errorHandler = () => {
        request
            .post('auth/refresh-tokens', {
                refreshToken: tokens.refresh.token
            })
            .then(res => {
                dispatch(tokenRefresh(res.data))
                console.log( 'success')
                console.log(res.data)
                // console.log(tokens)
            })
            .catch(res => {
                console.log('refresh-error')
                console.log(res)
            })

    }

    function handleAnsClick (props, e) {
        dispatch(
            updateAnswer({
                id: props.id,
                correctanswer: e.target.textContent
            })
        )
        if(tabIndex<9) setTimeout(() => setTabIndex(tabIndex+1), 500)

        console.log(e.target)
    }

    function handleSubmit () {
        setLoading(true)
        request
            .post("questions/submit",
                    questions.reduce(
                        (prev, curr) => [...prev, {id: curr.id, correctanswer: curr.correctanswer}], []
                    )
                ,
                {
                    headers: {
                        Authorization: `Bearer ${tokens.access.token}`
                    }
                })
            .then( res => {
                console.log(res.data)
                dispatch(updateScore(res.data))
                navigate('./result')
            })
    }

    useLayoutEffect(() => {
            setLoading(true)
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
                    setLoading(false)
                    dispatch(
                        fetchQuestion(res.data.results))
                })
                .catch(() => {
                    setLoading(false)
                        console.log('error')
                        errorHandler()
                    }
                )
        console.log(questions)
    },[])

    console.log(questions)

    return(
        <div className="quizz-container">
            {(isLoading && <LoadingComponent size={100} border={10}/>) ||
                <>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="quizz-nav">
                        {questions.map((question, index) =>
                            <Tab className="quizz-id" key={question.id}>
                                <span>{index + 1}</span>
                            </Tab>)}
                    </TabList>
                    {questions.map(question =>
                        <TabPanel className="quizz-panel" key={question.id}>
                            <h1>{question.question}</h1>
                            {((question.answer1 === question.correctanswer) &&
                                    <button className="answer-btn btn-active" onClick={(e) => {
                                        handleAnsClick(question, e)
                                    }}>{question.correctanswer}</button>) ||
                                <button className="answer-btn" onClick={(e) => {
                                    handleAnsClick(question, e)
                                }}>{question.answer1}</button>
                            }
                            {((question.answer2 === question.correctanswer) &&
                                    <button className="answer-btn btn-active" onClick={(e) => {
                                        handleAnsClick(question, e)
                                    }}>{question.correctanswer}</button>) ||
                                <button className="answer-btn" onClick={(e) => {
                                    handleAnsClick(question, e)
                                }}>{question.answer2}</button>
                            }
                            {((question.answer3 === question.correctanswer) &&
                                    <button className="answer-btn btn-active" onClick={(e) => {
                                        handleAnsClick(question, e)
                                    }}>{question.correctanswer}</button>) ||
                                <button className="answer-btn" onClick={(e) => {
                                    handleAnsClick(question, e)
                                }}>{question.answer3}</button>
                            }
                            {((question.answer4 === question.correctanswer) &&
                                    <button className="answer-btn btn-active" onClick={(e) => {
                                        handleAnsClick(question, e)
                                    }}>{question.correctanswer}</button>) ||
                                <button className="answer-btn" onClick={(e) => {
                                    handleAnsClick(question, e)
                                }}>{question.answer4}</button>
                            }
                        </TabPanel>)}
                </Tabs>
                <div className="tab-nav-btn">
                    {(tabIndex>0) && <button id="prev" onClick={() => {if(tabIndex>0) setTabIndex(tabIndex-1)}}>Prev</button>}
                    {(tabIndex<9) && <button id="next" onClick={() => {if(tabIndex<9) setTabIndex(tabIndex+1)}}>Next</button>}
                    {(tabIndex === 9) && <button id="submit" onClick={handleSubmit} disabled={isLoading}>Submit</button>}
                </div>
                </>}
        </div>)
}

export default QuestComponent