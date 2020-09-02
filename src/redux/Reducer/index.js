import { combineReducers } from "redux";
import { createForms } from 'react-redux-form';

import { Products } from './productsReducer';
import { Comments } from './commentsReducer';
import { Promotion } from './promotionReducer';
import { Cart, Increment, Decrement, RemoveItem } from './cartReducer';
import { InitialFeedback } from './FormsReducer';

export default combineReducers({
    products: Products,
    cart: Cart,
    increment: Increment,
    decrement: Decrement,
    removeItem: RemoveItem,
    comments: Comments,
    promotions: Promotion,
    ...createForms({
        feedback: InitialFeedback
    })
});