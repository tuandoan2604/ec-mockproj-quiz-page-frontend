import {createAction} from "@reduxjs/toolkit";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    items: []
}

const fetchQuestion = createAction('FETCHING_QUESTION');
const updateAnswer = createAction('UPDATE_ANSWER');
const resetAnswer = createAction('RESET_ANSWER');

const questionReducer = createReducer ( initialState , (builder) => {
    builder
        .addCase('FETCHING_QUESTION', (state, action) => {
            state.items = action.payload
        })
        .addCase('UPDATE_ANSWER', (state, action) => {
            state.items.forEach(item => {
                if(item.id === action.payload.id){
                    item.correctanswer = action.payload.correctanswer;
                }
            })
        })
        .addCase('RESET_ANSWER', (state) => {
            state.items.forEach(item => {
                delete item.correctanswer;
            })
        })
})

export {fetchQuestion, updateAnswer,resetAnswer};
export const selectQuestion = (state) => state.question.items
export default questionReducer;