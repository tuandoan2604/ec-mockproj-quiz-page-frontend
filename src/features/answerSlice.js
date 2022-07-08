import {createSlice} from "@reduxjs/toolkit";

export const answerSlice = createSlice({
    name: "answer",
    initialState: {
        answer: [],
    },
    reducers: {
        modifyAnswer: (state, action) => {
            let f = true;
            state.answer.forEach(ans => {
                if(ans.id == action.payload.id){
                    ans.answer=action.payload.answer;
                    f = false;
                    return;
                }
                return;
            })
            if (f) state.answer = [...state.answer, action.payload]
        }
    }
})

export const {modifyAnswer} = answerSlice.actions
export const selectAnswer = (state) => state.answer.answer
export default answerSlice.reducer