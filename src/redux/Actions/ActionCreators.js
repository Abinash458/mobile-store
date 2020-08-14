import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../../shared/baseUrl';

export const postComment = (productId, rating, author, comment) => (dispatch) => {
    const newComment = {
        productId: productId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + '/comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })

        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ": " + response.statusText)
                error.response = response;
                throw error;
            }
        },
            error => {
                var errorMessage = new Error(error.message);
                throw errorMessage;
            })
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => {
            console.log("post comments ", error.message)
            alert("Your comment could not be posted\n Error: " + error.message);
        });
}

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const fetchProduct = () => (dispatch) => {
    dispatch(productsLoading(true));

    return fetch(baseUrl + '/products')
        // handling errors
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ": " + response.statusText)
                error.response = response;
                throw error;
            }
        },
            error => {
                var errorMessage = new Error(error.message);
                throw errorMessage;
            })
        .then(response => response.json())
        .then(products => dispatch(addProducts(products)))
        .catch(error => dispatch(productsFailed(error.message)));
}

export const productsLoading = () => ({
    type: ActionTypes.PRODUCT_LOADING
});

export const productsFailed = (errMess) => ({
    type: ActionTypes.PRODUCT_FAILED,
    payload: errMess
})

export const addProducts = (products) => ({
    type: ActionTypes.ADD_PRODUCT,
    payload: products,
});


// Fetch Comments
export const fetchComments = () => (dispatch) => {

    return fetch(baseUrl + '/comments')
        // handling errors
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ": " + response.statusText)
                error.response = response;
                throw error;
            }
        },
            error => {
                var errorMessage = new Error(error.message);
                throw errorMessage;
            })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
}

export const commentsFailed = (errMess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
})

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments,
});

// Fetch Promotions
export const fetchPromotions = () => (dispatch) => {
    dispatch(promotionLoading(true));

    return fetch(baseUrl + '/promotions')
        // handling errors
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ": " + response.statusText)
                error.response = response;
                throw error;
            }
        },
            error => {
                var errorMessage = new Error(error.message);
                throw errorMessage;
            })
        .then(response => response.json())
        .then(promotions => dispatch(addPromotions(promotions)))
        .catch(error => dispatch(promotionsFailed(error.message)));
}

export const promotionLoading = () => ({
    type: ActionTypes.PROMOTIONS_LOADING
});

export const promotionsFailed = (errMess) => ({
    type: ActionTypes.PROMOTIONS_FAILED,
    payload: errMess
})

export const addPromotions = (promotions) => ({
    type: ActionTypes.ADD_PROMOTIONS,
    payload: promotions,
});