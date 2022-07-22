import React from 'react'
import { Button, Space, Table, Tag } from 'antd'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const columns = [
  {
    title: 'Question',
    dataIndex: 'question',
    key: 'name',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Your Answer',
    dataIndex: 'correctanswer',
    key: 'answer',
  },
  {
    title: 'Result',
    dataIndex: 'result',
    key: 'result',
  },
]
export default function ResultDetail() {
  const navigate = useNavigate()
  const resultData = useSelector((state) => state.result.results)
  const copyResultData = JSON.parse(JSON.stringify(resultData))
  //mapping
  copyResultData.map((result, index) => {
    result.key = result.id
    result.question = index + 1
    if (result.result === true) {
      result.result = 'Correct'
    } else if (result.result === false) {
      result.result = 'Incorrect'
    }
    return null
  })

  const handleRestarted = () => {
    navigate('/quiz-detail', { replace: true })
  }

  return (
    <>
      <div>ResultDetail</div>
      <div style={{ marginLeft: '50%' }}>
        <div
          style={{
            backgroundColor: 'white',
            marginTop: '16px',
            width: '500px',
            height: 'auto',
            borderRadius: '32px',
            transform: 'translate(-50%, 0)',
            padding: '16px',
          }}
        >
          <Table
            style={{ height: '100%' }}
            columns={columns}
            dataSource={copyResultData}
            pagination={{ pageSize: 5 }}
          />
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
      </div>
    </>
  )
}
