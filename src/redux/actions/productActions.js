import api from '../../utils/api'
import { SET_PRODUCTS, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT, FETCH_PRODUCTS } from '../types'

export const fetchProducts = () => async (dispatch) => {
    const response = await api.get('products')
    dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data
    })
}


export const setProduct = (product) => {
    return {
        type: SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = () => {
    return {
        type: REMOVE_SELECTED_PRODUCT
    }
}