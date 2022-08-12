import * as api from '../../api/index'
import { fetchProduct } from '../reducers/productSlice'

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.getProducts()
    dispatch(fetchProduct(data))
  } catch (error) {
    console.log(error.message)
  }
}
