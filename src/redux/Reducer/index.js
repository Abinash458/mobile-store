import { combineReducers } from "redux";
import { createForms } from 'react-redux-form';

import { Products } from './productsReducer';
import { Comments } from './commentsReducer';
import { Promotion } from './promotionReducer';
import { Cart, Increment, Decrement, TotalPrice } from './cartReducer';
import { InitialFeedback } from './FormsReducer';

export default combineReducers({
    products: Products,
    cart: Cart,
    increment: Increment,
    decrement: Decrement,
    total: TotalPrice,
    comments: Comments,
    promotions: Promotion,
    ...createForms({
        feedback: InitialFeedback
    })
});