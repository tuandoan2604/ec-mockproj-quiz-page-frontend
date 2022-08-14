import * as api from '../../api/index'
import { fetchProduct, deleteReduxProduct } from '../reducers/productSlice'
import { message } from 'antd'
import { isCompositeComponent } from 'react-dom/test-utils'

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.getProducts()
    dispatch(fetchProduct(data))
  } catch (error) {
    console.log(error.message)
  }
}

export const editProduct =
  (formData, editItemId, navigate) => async (dispatch) => {
    try {
      const { data } = await api.updateProduct(formData, editItemId)
      if (data.message === 'Update product success') {
        message.success('Successfully update product!')
        navigate('/admin/product-list', { replace: true })
      }
    } catch (error) {
      console.log(error.message)
    }
  }

export const deleteProduct = (productId) => async (dispatch) => {
  try {
    const { data } = await api.deleteProductById(productId)
    console.log(data)
    if (data.message === 'Delete product success') {
      dispatch(deleteReduxProduct(productId))
      message.success('Successfully delete product!')
    }
  } catch (error) {
    console.log(error.message)
  }
}

export const createItem = (formData, navigate) => async (dispatch) => {
  try {
    console.log(formData)
    const { data } = await api.createProduct(formData)
    console.log(data)
    // if (data.message === 'Delete product success') {
    //   dispatch(deleteReduxProduct(productId))
    //   message.success('Successfully delete product!')
    // }
  } catch (error) {
    console.log(error.message)
  }
}
