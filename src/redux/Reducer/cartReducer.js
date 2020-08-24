import * as ActionTypes from '../Actions/ActionTypes';

const cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

export default function (state = {
    isLoading: true,
    errMess: null,
    cart: cartItems
}, action) {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            return { ...state, isLoading: false, errMess: null, cart: action.payload }

        case ActionTypes.CART_LOADING:
            return { ...state, isLoading: true, errMess: null, cart: [] }

        case ActionTypes.CART_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, cart: [] }

        default:
            return state;
    }
}