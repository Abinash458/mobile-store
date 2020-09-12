import * as ActionTypes from '../Actions/ActionTypes';

// const cartItems = localStorage.getItem("cartItems")
//     ? JSON.parse(localStorage.getItem("cartItems"))
//     : [];

export const Cart = (state = {
    isLoading: true,
    errMess: null,
    cart: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            return { ...state, isLoading: false, errMess: null, cart: action.payload }

        case ActionTypes.CART_LOADING:
            return { ...state, isLoading: true, errMess: null, cart: [] }

        case ActionTypes.CART_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, cart: [] }

        case ActionTypes.REMOVE_ITEM:
            return { ...state, isLoading: false, errMess: null, cart: action.payload }

        case ActionTypes.REMOVE_ITEM_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, cart: [] }

        case ActionTypes.CLEAR_CART:
            return { ...state, isLoading: false, errMess: null, cart: action.payload }

        case ActionTypes.CLEAR_CART_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, cart: [] }

        default:
            return state;
    }
}

export const Increment = (state = {
    isLoading: true,
    errMess: null,
    incre: []
}, action) => {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return { ...state, isLoading: false, errMess: null, incre: action.payload }

        case ActionTypes.INCREMENT_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, incre: [] }

        default:
            return state;
    }
}

export const Decrement = (state = {
    isLoading: true,
    errMess: null,
    decre: []
}, action) => {
    switch (action.type) {
        case ActionTypes.DECREMENT:
            return { ...state, isLoading: false, errMess: null, decre: action.payload }

        case ActionTypes.DECREMENT_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, decre: [] }

        default:
            return state;
    }
}

export const TotalPrice = (state = {
    isLoading: true,
    errMess: null,
    totalPrice: {
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
    }
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TOTALS:
            return { ...state, isLoading: false, errMess: null, totalPrice: action.payload }

        case ActionTypes.ADD_TOTALS_FAILED:
            return {
                ...state, isLoading: false, errMess: action.payload, totalPrice: {
                    cartSubTotal: 0,
                    cartTax: 0,
                    cartTotal: 0,
                }
            }

        default:
            return state;
    }
}