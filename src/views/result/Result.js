import React from 'react'
import star from '../../star.png'
import {
  ProfileOutlined,
  ClockCircleOutlined,
  StarOutlined,
} from '@ant-design/icons'
import { Button, Card } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const avatar =
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'

export default function Result() {
  const resultData = useSelector((state) => state.result.results)
  console.log(resultData)

  let result = 0
  const navigate = useNavigate()
  resultData.map((quizResult) => {
    if (quizResult.result) {
      result += 1
    }
    return null
  })
  const handleRestarted = () => {
    navigate('/quiz-detail', { replace: true })
  }

  const handleViewResultDetail = () => {
    navigate('/result-detail', { replace: true })
  }
  return (
    <>
      <div>
        <div
          style={{
            width: '375px',
            marginLeft: '50%',
            transform: 'translate(-50%, 0)',
            fontSize: '18px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '30px',
          }}
        >
          <div
            style={{
              top: '45px',
              color: 'white',
            }}
          >
            Detail Quiz
          </div>
          <img
            src={avatar}
            alt="avatar"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
        </div>
        <div
          style={{
            width: '327px',
            height: '45px',
            marginLeft: '50%',
            transform: 'translate(-50%, 0)',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              color: 'white',
            }}
          >
            <div>UI UX Design Quiz</div>
            <div>{`${result * 10}/100`} points</div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img src={star} alt="star" />
            &nbsp; 4.8
          </div>
        </div>
        <div style={{ marginLeft: '50%' }}>
          <div
            style={{
              backgroundColor: 'white',
              marginTop: '16px',
              width: '500px',
              height: '450px',
              borderRadius: '32px',
              transform: 'translate(-50%, 0)',
              padding: '16px',
            }}
          >
            <Card
              size="small"
              title="Brief explanation about this quiz"
              style={{
                width: '100%',
                border: 'none',
                borderRadius: '32px',
                textAlign: 'start',
                paddingLeft: '30px',
                paddingTop: '20px',
              }}
            >
              <p>
                <ProfileOutlined />
                &nbsp; {`${result}/10`} Correct Answers
              </p>
              <p>
                <ClockCircleOutlined />
                &nbsp; 1 hour 15 min
              </p>
              <p>
                <StarOutlined />
                &nbsp; {result} stars achieve
              </p>
            </Card>
            <div>
              <ul style={{ textAlign: 'start' }}>
                <li>
                  10 point awarded for a correct answer and no marks for a
                  incorrect answer
                </li>
                <li>Tap on options to select the correct answer</li>
                <li>Tap on the bookmark icon to save interesting questions</li>
                <li>
                  Click submit if you are sure you want to complete all the
                  quizzes
                </li>
              </ul>
            </div>
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
              onClick={handleViewResultDetail}
            >
              View Result Detail!
            </Button>
          </div>
        </div>
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
          onClick={handleRestarted}
        >
          Restarted!
        </Button>
      </div>
    </>
  )
}
