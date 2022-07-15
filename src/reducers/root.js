import {combineReducers} from "@reduxjs/toolkit";
import userReducer from "./user";
import questionReducer from "./data";
import scoreReducer from "./score";

const rootReducer = combineReducers({
    user: userReducer,
    question: questionReducer,
    score: scoreReducer,
})

export default rootReducer;
