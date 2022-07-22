import { FETCH_ALL } from '../../constants/actionTypes'

export default function posts(quizzes = [], action) {
  switch (action.type) {
    case FETCH_ALL:
      // console.log('action.payload.result reducer', action.payload.results)
      return action.payload.results
    default:
      return quizzes
  }
}
