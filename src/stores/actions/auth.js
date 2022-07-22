import * as api from '../../api/index'
import { AUTH } from '../../constants/actionTypes'
import { signIn } from '../../redux/reducers/authSlice'

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData)

    // dispatch({ type: AUTH, data })
    console.log(data)

    dispatch(signIn(data))

    navigate('/quiz-detail', { replace: true })
  } catch (error) {
    console.log(error.message)
  }
}

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    // console.log(formData)
    const { data } = await api.signUp(formData)

    // console.log(data)

    dispatch({ type: AUTH, data })

    navigate('/signin')
  } catch (error) {
    console.log(error.message)
  }
}
