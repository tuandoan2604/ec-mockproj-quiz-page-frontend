import {configureStore} from '@reduxjs/toolkit';
import AuthReducer from './slices/AuthSlice';
import QuestionReducer from './slices/GetQuestionSlice';
const store = configureStore({
  reducer: {
    Auth: AuthReducer,
    Question: QuestionReducer,
  },
});

export default store;
