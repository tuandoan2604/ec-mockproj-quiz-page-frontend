import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import authReducer from './reducers/authSlice'
import productReducer from './reducers/productSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
})
