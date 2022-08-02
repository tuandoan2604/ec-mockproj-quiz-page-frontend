import {createAction} from "@reduxjs/toolkit";
import {createReducer} from "@reduxjs/toolkit";

const updateScore = createAction('UPDATE_SCORE');

const initialState = {
    marks: [],
    score: 0
}

const scoreReducer = createReducer ( initialState, (builder) => {
    builder
        .addCase('UPDATE_SCORE', (state, action) => {
            state.score = 0;
            state.marks = action.payload;
            state.marks.forEach(mark => {
                if(mark.result == true) return state.score++
            })
        })
})

export {updateScore};
export const selectScore = (state) => state.score
export default scoreReducer;