import { SET_PRODUCTS } from '../types'

const inititalState = {
    products: [
        {
            id: 1,
            title: "Tomás",
            category: "FullStack developer"
        }
    ]
}

const ProductReducer = (state = inititalState, { type, payload} ) => {
    switch(type){
        case SET_PRODUCTS:
            return state
        default:
            return state
    }
}
export default ProductReducer