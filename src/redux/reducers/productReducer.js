import {  SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT, FETCH_PRODUCTS } from '../types'

const inititalState = {
    products: [],
    selectedProduct: {}
}

const ProductReducer = (state = inititalState, { type, payload} ) => {
    console.log({type, payload})
    switch(type){
        case SELECTED_PRODUCT:

            return { ...state, selectedProduct: payload}

        case REMOVE_SELECTED_PRODUCT:
            
            return { ...state, selectedProduct: {} }

        case FETCH_PRODUCTS:

            return { ...state, products: payload}
        default:
            return state
    }
}
export default ProductReducer