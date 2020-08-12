import * as ActionTypes from './ActionTypes';
import { storeProducts } from '../../shared/productsData';

export const addComment = (productId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        productId: productId,
        rating: rating,
        author: author,
        comment: comment
    }
})

export const fetchProduct = () => (dispatch) => {
    dispatch(productsLoading(true));

    setTimeout(() => {
        dispatch(addProducts(storeProducts));
    }, 2000);
}

export const productsLoading = () => ({
    type: ActionTypes.PRODUCT_LOADING
});

export const productsFails = (errMess) => ({
    type: ActionTypes.PRODUCT_FAILED,
    payload: errMess
})

export const addProducts = (products) => ({
    type: ActionTypes.ADD_PRODUCT,
    payload: products,
})