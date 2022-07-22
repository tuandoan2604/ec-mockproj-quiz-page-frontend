import { SUBMIT } from '../../constants/actionTypes'

export default function posts(result = [], action) {
  switch (action.type) {
    case SUBMIT:
      return action.payload
    default:
      return result
  }
}
