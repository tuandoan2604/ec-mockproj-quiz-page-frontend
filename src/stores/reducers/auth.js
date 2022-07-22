import { AUTH, LOGOUT } from '../../constants/actionTypes'

export default function authReducer(state = {}, action) {
  switch (action.type) {
    case AUTH:
      console.log(action)
      localStorage.setItem('tokens', JSON.stringify({ ...action?.data.tokens }))
      localStorage.setItem('user', JSON.stringify({ ...action?.data.user }))

      return { ...state, user: action.data.user }
    case LOGOUT:
      localStorage.clear()
      return { ...state, authData: null }
    default:
      return state
  }
}
