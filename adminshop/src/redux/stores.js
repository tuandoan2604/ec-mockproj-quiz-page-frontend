import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import authReducer from './reducers/authSlice'
import productReducer from './reducers/productSlice'
import cartReducer from './reducers/cartSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  cart: cartReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
})
