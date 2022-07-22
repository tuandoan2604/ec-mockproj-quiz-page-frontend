import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  quizzes: [],
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    fetchQuiz: (state, action) => {
      state.quizzes = [...action.payload.results]
    },
  },
})

export const { fetchQuiz } = quizSlice.actions
export default quizSlice.reducer
