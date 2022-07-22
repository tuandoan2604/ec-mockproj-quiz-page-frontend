import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from './reducers/authSlice'
import quizReducer from './reducers/quizSlice'
import resultReducer from './reducers/resultSlice'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['quiz'],
}

const rootReducer = combineReducers({
  auth: authReducer,
  quiz: quizReducer,
  result: resultReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})
export const persistor = persistStore(store)
export default store
