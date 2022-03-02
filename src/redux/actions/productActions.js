import { SET_PRODUCTS, SELECTED_PRODUCTS } from '../types'

export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}

export const selectedProducts = (product) => {
    return {
        type: SELECTED_PRODUCTS,
        payload: product
    }
}