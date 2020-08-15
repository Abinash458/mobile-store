import * as ActionTypes from '../Actions/ActionTypes';

export const Cart = (state = {
    cartItems: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            return { ...state, cartItems: action.payload }

        case ActionTypes.REMOVE_FROM_CART:
            return { ...state, cartItems: action.payload }

        default:
            return state;
    }
}