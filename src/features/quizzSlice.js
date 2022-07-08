import {createSlice} from "@reduxjs/toolkit"

export const quizzSlice = createSlice({
    name: "quizz",
    initialState: {
        question: [],
        answer: [],
    },
    reducers: {
        getQuestion: (state, action) => {
            state.question = action.payload
        }
    }
})

export const {getQuestion} = quizzSlice.actions
export const selectQuestion = (state) => state.quizz.question
export default quizzSlice.reducer