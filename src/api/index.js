import axios from 'axios'
import { message } from 'antd'

const API = axios.create({
  baseURL: 'https://fwa-ec-quiz-mock1.herokuapp.com/v1/',
})

API.interceptors.request.use(async (config) => {
  console.log('request interceptors!')
  if (localStorage.getItem('tokens')) {
    const token = JSON.parse(localStorage.getItem('tokens')).access.token
    const expire = Number(
      new Date(JSON.parse(localStorage.getItem('tokens')).access.expires)
    )
    const current = Number(new Date())
    if (expire <= current) {
      console.log('expired!!!')
      console.log(JSON.parse(localStorage.getItem('tokens')).refresh.token)
      const res = await axios.post(
        'https://fwa-ec-quiz-mock1.herokuapp.com/v1/auth/refresh-tokens',
        {
          refreshToken: JSON.parse(localStorage.getItem('tokens')).refresh
            .token,
        }
      )
      localStorage.removeItem('tokens')
      localStorage.setItem('tokens', JSON.stringify({ ...res.data }))

      config.headers.authorization = `Bearer ${res.data.access.token}`
    } else {
      config.headers.authorization = `Bearer ${token}`
    }
  }
  return config
})

// API.interceptors.response.use(
//   (response) => {
//     return response
//   },
//   async (error) => {
//     const originalConfig = error.config
//     console.log(originalConfig)
//     if (error.response.data.message === 'Incorrect username or password') {
//       message.info(error.response.data.message)
//     } else if (
//       error.response.data.message === 'Please authenticate' &&
//       JSON.parse(localStorage.getItem('tokens')).refresh.token
//     ) {
//       console.log(originalConfig)
//       originalConfig._retry = true
//       console.log(JSON.parse(localStorage.getItem('tokens')).refresh.token)

//       const newRes = await API.post('/auth/refresh-tokens', {
//         refreshToken: JSON.parse(localStorage.getItem('tokens')).refresh.token,
//       })
//       console.log('newRes: ', newRes)
//       localStorage.removeItem('tokens')

//       localStorage.setItem('tokens', JSON.stringify({ ...newRes.data }))
//       console.log(axios)
//       axios.defaults.headers.common[
//         'Authorization'
//       ] = `Bearer ${newRes.data.access.token}`
//       return API(originalConfig)
//     }
//     return error
//   }
// )

API.interceptors.response.use(
  (config) => {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

export const signIn = (formData) => API.post('/auth/login', formData)
export const signUp = (formData) => API.post('/auth/register', formData)

export const getQuiz = (ranNum) => API.get(`/questions?page=${ranNum}&limit=10`)

export const submitQuiz = (answers) => API.post('/questions/submit', answers)
