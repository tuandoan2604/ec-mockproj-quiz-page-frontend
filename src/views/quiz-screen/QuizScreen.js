import React from 'react'
import MySteps from '../components/MySteps/MySteps'
import Quiz from '../components/Quiz/Quiz'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Spin } from 'antd'

let quizData = []

export default function QuizScreen() {
  const [loaded, setLoaded] = useState(false)
  const inputData = useSelector((state) => state?.quiz.quizzes)
  //redux toolkit has shallow copy of state => cannot delete below
  const copyInputData = JSON.parse(JSON.stringify(inputData))
  useEffect(() => {
    quizMapping(copyInputData)
    console.log(copyInputData)
    if (quizData.length) {
      setLoaded(true)
    }
  }, [inputData])

  const quizMapping = (copyInputData) => {
    quizData = copyInputData.map((quiz) => {
      const question = quiz.question
      const id = quiz.id
      delete quiz.question
      delete quiz.id
      const answers = [...Object.values(quiz)]

      return { question, answers, id }
    })
  }
  const [current, setCurrent] = useState(0)
  return (
    <>
      <div>
        <div
          style={{
            color: 'white',
            fontSize: '18px',
            marginTop: '30px',
          }}
        >
          UI UX Design quiz
        </div>
        <div
          style={{
            backgroundColor: 'white',
            marginTop: '16px',
            width: '450px',
            height: 'auto',
            minHeight: '450px',
            borderRadius: '32px',
            marginLeft: '50%',
            transform: 'translate(-50%, 0)',
            padding: '20px',
          }}
        >
          <MySteps handleChangeQuiz={setCurrent} />
          {!loaded ? (
            <Spin />
          ) : (
            <Quiz quizData={quizData} currentQuiz={current} />
          )}
        </div>
      </div>
    </>
  )
}
