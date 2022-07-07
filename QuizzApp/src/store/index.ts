import {configureStore} from '@reduxjs/toolkit';
import AuthReducer from './slices/AuthSlice';
const store = configureStore({
  reducer: {
    Auth: AuthReducer,
  },
});

export default store;
