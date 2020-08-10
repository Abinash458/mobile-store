import { storeProducts } from '../shared/productsData';
import { PROMOTIONS } from '../shared/promotion';
import { COMMENTS } from '../shared/comments';

export const initialState = {
    products: storeProducts,
    comments: COMMENTS,
    promotions: PROMOTIONS,
};

export const Reducer = (state = initialState, action) => {
    return state;
}