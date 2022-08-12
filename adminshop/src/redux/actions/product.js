import * as api from '../../api/index'
import { fetchProduct } from '../reducers/productSlice'
import { message } from 'antd'

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.getProducts()
    dispatch(fetchProduct(data))
  } catch (error) {
    console.log(error.message)
  }
}

export const editProduct =
  (editedData, editItemId, navigate) => async (dispatch) => {
    try {
      const { data } = await api.updateProduct(editedData, editItemId)
      if (data.message === 'Update product success') {
        message.success('Successfully update product!')
        navigate('/admin/product-list', { replace: true })
      }
    } catch (error) {
      console.log(error.message)
    }
  }
