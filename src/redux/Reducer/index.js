import { combineReducers } from "redux";
import { createForms } from 'react-redux-form';

import { Products } from './productsReducer';
import { Comments } from './commentsReducer';
import { Promotion } from './promotionReducer';
import cartReducers from './cartReducer';
import { InitialFeedback } from './FormsReducer';

// const cartItems = localStorage.getItem("cartItems")
//     ? JSON.parse(localStorage.getItem("cartItems"))
//     : [];

// const initState = { cart: { items: cartItems } };

export default combineReducers({
    products: Products,
    cart: cartReducers,
    comments: Comments,
    promotions: Promotion,
    // initState,
    ...createForms({
        feedback: InitialFeedback
    })
});