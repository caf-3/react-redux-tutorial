import { SET_PRODUCTS, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT } from '../types'

const inititalState = {
    products: [],
    selectedProduct: {}
}

const ProductReducer = (state = inititalState, { type, payload} ) => {
    console.log({type})

    switch(type){
        case SET_PRODUCTS:

            return {...state, products: payload}
        case SELECTED_PRODUCT:

            return { ...state, selectedProduct: payload}

        case REMOVE_SELECTED_PRODUCT:
            
            return { ...state, selectedProduct: {} }
        default:
            return state
    }
}
export default ProductReducer