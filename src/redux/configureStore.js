import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Products } from './Reducer/productsReducer';
import { Comments } from './Reducer/commentsReducer';
import { Promotion } from './Reducer/promotionReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            products: Products,
            comments: Comments,
            promotions: Promotion
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}