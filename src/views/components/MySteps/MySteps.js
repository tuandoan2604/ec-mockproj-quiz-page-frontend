import React from 'react'
import { Steps, Divider } from 'antd'
import { useState } from 'react'

const { Step } = Steps

export default function MySteps({ handleChangeQuiz }) {
  const [current, setCurrent] = useState(0)
  return (
    <div>
      <Steps
        size="small"
        current={current}
        onChange={(value) => {
          setCurrent(value)
          handleChangeQuiz(value)
        }}
        style={{
          width: '100%',
          paddingLeft: '10px',
        }}
      >
        <Step />
        <Step />
        <Step />
        <Step />
        <Step />
        <Step />
        <Step />
        <Step />
        <Step />
        <Step />
      </Steps>
      <Divider />
    </div>
  )
}
