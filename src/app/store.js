import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../features/userSlice"
import quizzReducer from "../features/quizzSlice"
import answerReducer from "../features/answerSlice";
export default configureStore({
    reducer: {
        user: userReducer,
        quizz: quizzReducer,
        answer: answerReducer,
    }
})