import * as ActionTypes from '../Actions/ActionTypes';

export const Products = (state = {
    isLoading: true,
    errMess: null,
    products: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PRODUCT:
            return { ...state, isLoading: false, errMess: null, products: action.payload }
        case ActionTypes.PRODUCT_LOADING:
            return { ...state, isLoading: true, errMess: null, products: [] }
        case ActionTypes.PRODUCT_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, products: [] }
        default:
            return state;
    }
}
