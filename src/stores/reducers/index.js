import { combineReducers } from 'redux'
import auth from './auth'
import quiz from './quiz'
import result from './result'

export const reducers = combineReducers({ auth, quiz, result })
