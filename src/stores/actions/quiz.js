import * as api from '../../api/index.js'
import { FETCH_ALL, SUBMIT } from '../../constants/actionTypes'
import { fetchQuiz } from '../../redux/reducers/quizSlice'
import { fetchResult } from '../../redux/reducers/resultSlice'

export const getQuiz = () => async (dispatch) => {
  try {
    const randomNum = Math.floor(Math.random() * 5)
    const { data } = await api.getQuiz(randomNum)
    // dispatch({ type: FETCH_ALL, payload: data })
    dispatch(fetchQuiz(data))
  } catch (error) {
    console.log(error.message)
  }
}
export const submitQuiz = (answers, navigate) => async (dispatch) => {
  try {
    const { data } = await api.submitQuiz(answers)

    // dispatch({ type: SUBMIT, payload: data })
    dispatch(fetchResult(data))
    navigate('/result', { replace: true })
  } catch (error) {
    console.log(error.message)
  }
}
