import './App.css'
import Onboard from './views/onboard/OnBoard'
import SignIn from './views/signin/SignIn'
import SignUp from './views/signup/SignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import QuizDetail from './views/quiz-detail/QuizDetail'
import QuizScreen from './views/quiz-screen/QuizScreen'
import Result from './views/result/Result'
import ResultDetail from './views/result-detail/ResultDetail'

import React from 'react'

import { useEffect, useState } from 'react'

function App() {
  const [tokens, setTokens] = useState(
    JSON.parse(JSON.parse(localStorage.getItem('persist:root')).auth).tokens
  )
  useEffect(() => {
    console.log('testtest')
    localStorage.setItem('tokens', tokens)
    console.log(localStorage.getItem('tokens'))
  }, [tokens])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onboard />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {!tokens ? null : (
            <React.Fragment>
              <Route path="/quiz-detail" element={<QuizDetail />} />
              <Route path="/quiz-screen" element={<QuizScreen />} />
              <Route path="/result" element={<Result />} />
              <Route path="/result-detail" element={<ResultDetail />} />
            </React.Fragment>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
