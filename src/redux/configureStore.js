import { createStore, combineReducers } from 'redux';
import { Products } from './Reducer/productsReducer';
import { Comments } from './Reducer/commentsReducer';
import { Promotion } from './Reducer/promotionReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            products: Products,
            comments: Comments,
            promotions: Promotion
        })
    );
    return store;
}