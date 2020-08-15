import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';

import { Products } from './Reducer/productsReducer';
import { Comments } from './Reducer/commentsReducer';
import { Promotion } from './Reducer/promotionReducer';
import { Cart } from './Reducer/cartReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './Reducer/FormsReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            products: Products,
            comments: Comments,
            promotions: Promotion,
            cartItems: Cart,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}