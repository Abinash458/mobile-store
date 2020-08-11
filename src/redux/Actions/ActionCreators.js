import * as ActionTypes from './ActionTypes';

export const addComment = (productId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        productId: productId,
        rating: rating,
        author: author,
        comment: comment
    }
})