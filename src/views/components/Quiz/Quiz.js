import React from 'react'
import { Button } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './quiz.css'
import { submitQuiz } from '../../../stores/actions/quiz'

export default function Quiz({ quizData, currentQuiz }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [selected, setSelected] = useState([])
  const handleChoose = (e) => {
    // if (!e.target.className.includes('active')) {
    //   // change UI
    //   e.target.className += ' active'
    //   // add to selected array
    //   selected.push(e.target.id)
    // } else {
    //   e.target.className = e.target.className.replace(' active', '')
    //   //deselect
    //   selected = selected.filter((item) => item !== e.target.id)
    // }

    const ans = {
      id: quizData[currentQuiz].id,
      correctanswer:
        quizData[currentQuiz].answers[Number(e.target.innerText) - 1],
    }
    if (!selected.find((item) => item.id === ans.id)) {
      setSelected((prev) => [...prev, ans])
    } else {
      selected.find((item) => item.id === ans.id).correctanswer =
        ans.correctanswer
    }
  }

  const handleSubmit = () => {
    console.log(selected)
    dispatch(submitQuiz(selected, navigate))
  }
  return (
    <>
      <div style={{ marginBottom: '27px' }}>
        {`Question ${currentQuiz + 1}: ${quizData[currentQuiz]?.question}`}
      </div>

      {quizData[currentQuiz]?.answers.map((ans, i) => {
        return (
          <div
            key={i}
            style={{
              width: '272px',
              height: '40px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: '16px',
              marginLeft: '24px',
            }}
          >
            <div>
              <Button
                type="secondary"
                className="my-btn"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  marginRight: '6px',
                }}
                onClick={(e) => {
                  handleChoose(e)
                }}
              >
                {i + 1}
              </Button>
            </div>
            <p
              style={{
                margin: '0',
                height: '16px',
                fontSize: '14px',
                lineHeight: '16px',
              }}
            >
              {ans}
            </p>
          </div>
        )
      })}
      {currentQuiz === 9 ? (
        <Button
          style={{
            background:
              'linear-gradient(122.76deg, #3550DC -35.72%, #27E9F7 172.73%)',
            color: 'white',
            width: '327px',
            height: '50px',
            marginTop: '20px',
            borderRadius: '20px',
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      ) : null}
    </>
  )
}
