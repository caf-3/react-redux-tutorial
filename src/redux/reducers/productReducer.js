import { SET_PRODUCTS } from '../types'

const inititalState = {
    products: []
}

const ProductReducer = (state = inititalState, { type, payload} ) => {
    switch(type){
        
        case SET_PRODUCTS:
            return {...state, products: payload}
        default:
            return state
    }
}
export default ProductReducer