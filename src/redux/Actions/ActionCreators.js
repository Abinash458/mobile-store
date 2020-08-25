import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../../shared/baseUrl';

// POST COMMENTS
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

// POST FEEDBACK
export const postFeedback = (firstName, lastName, telNum, email, agree, contactType, message) => (dispatch) => {

    const newFeedBack = {
        firstName: firstName,
        lastName: lastName,
        telNum: telNum,
        email: email,
        agree: agree,
        contactType: contactType,
        message: message
    }

    return fetch(baseUrl + "/feedback", {
        method: "POST",
        body: JSON.stringify(newFeedBack),
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
        .then(response => alert("Thank you for your feedback!" + JSON.stringify(response)))
        .catch(error => {
            console.log("post Feedback ", error.message)
            alert("Your feedback could not be posted\n Error: " + error.message);
        });
}

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

// Cart Function

export const addToCart = (products, items) => (dispatch) => {
    try {
        dispatch(cartLoading(true));
        const cartItems = items.slice();

        const cart = cartItems.filter((cartProd) => cartProd.id === products.id);
        if (cart) {
            products.inCart = true;
            products.count = 1;
            const price = products.price;
            products.total = price;
            cart.push(products);
        }

        localStorage.setItem("cartItems", JSON.stringify(cart));
        dispatch(addCart(cart));
    } catch (error) {
        dispatch(cartFailed(error))
    }
}



export const cartLoading = () => ({
    type: ActionTypes.CART_LOADING
});

export const cartFailed = (errMess) => ({
    type: ActionTypes.CART_FAILED,
    payload: errMess
})

export const addCart = (cartItems) => ({
    type: ActionTypes.ADD_TO_CART,
    payload: cartItems,
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