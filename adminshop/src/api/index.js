import axios from 'axios'
import { decryptData, encryptData } from '../util/util'

const API = axios.create({
  baseURL: 'http://139.59.103.50:5000',
})

const salt = process.env.REACT_APP_SALT

API.interceptors.request.use(async (config) => {
  console.log('request interceptors!')
  if (localStorage.getItem('tokens')) {
    let decryptedTokens = decryptData(localStorage.getItem('tokens'), salt)
    let decryptedDeviceId = decryptData(localStorage.getItem('deviceId'), salt)

    const expire = Number(new Date(decryptedTokens.access.expires))
    const current = Number(new Date())
    if (expire <= current) {
      console.log('expired!!!')
      let refreshToken = decryptedTokens.refresh.token
      const res = await axios.post(
        'http://139.59.103.50:5000/v1/auth/refresh-tokens',
        { refreshToken, deviceId: decryptedDeviceId }
      )

      const encryptedTokens = encryptData(res.data)

      localStorage.setItem('tokens', encryptedTokens)

      config.headers.authorization = `Bearer ${res.data.access.token}`
    } else {
      config.headers.authorization = `Bearer ${decryptedTokens.access.token}`
    }
  }
  return config
})

export const signUp = (formData) => API.post('/v1/auth/register', formData)
export const signIn = (formData) => API.post('/v1/auth/login', formData)
export const logOut = (reqData) => API.post('/v1/auth/logout', reqData)

export const getProducts = () => API.get('/v1/products?category=Shoes')

export const createCart = (cart) => API.post('/v1/cart', cart)
