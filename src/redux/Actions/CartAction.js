import * as ActionTypes from './ActionTypes';

// Cart Function
export const addToCart = (product, items) => (dispatch) => {
    try {
        dispatch(cartLoading(true));
        const cart = items;

        product.count = 1;
        const price = product.price;
        product.total = price;
        product.inCart = true;

        const updatedCart = [...cart, product];

        // localStorage.setItem("cartItems", JSON.stringify(updatedCart));

        dispatch(addCart(updatedCart));

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

export const addCart = (updatedCart) => ({
    type: ActionTypes.ADD_TO_CART,
    payload: updatedCart,
});

// INCREMENT FUNCTION
export const increment = (id, cart) => (dispatch) => {
    try {
        const tempCart = cart;
        const selectedItem = tempCart.find((item) => item.id === id);
        const index = tempCart.indexOf(selectedItem);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        const updatedCartProduct = [...tempCart];

        dispatch(incrementCart(updatedCartProduct))
    } catch (error) {
        dispatch(incrementFailed(error))
    }
}

export const incrementFailed = (errMess) => ({
    type: ActionTypes.INCREMENT_FAILED,
    payload: errMess
})

export const incrementCart = (updatedCartProduct) => ({
    type: ActionTypes.INCREMENT,
    payload: updatedCartProduct,
});

// DECREMENT FUNCTION
export const decrement = (id, cart) => (dispatch) => {
    try {

        let tempCart = cart;
        const seletedItem = tempCart.find((item) => item.id === id);
        const index = tempCart.indexOf(seletedItem);
        const product = tempCart[index];
        product.count = product.count - 1;

        if (product.count === 0) {
            dispatch(removeItem(id, cart));

        } else {
            product.total = product.count * product.price;
        }

        const updatedCartProduct = [...tempCart];

        dispatch(decrementCart(updatedCartProduct))
    } catch (error) {
        dispatch(decrementFailed(error))
    }
}

export const decrementCart = (updatedCartProduct) => ({
    type: ActionTypes.DECREMENT,
    payload: updatedCartProduct,
})

export const decrementFailed = (errMess) => ({
    type: ActionTypes.DECREMENT_FAILED,
    payload: errMess,
})

// Remove Item Function

const getItem = (id, products) => {
    const product = products.find((item) => item.id === id);
    return product;
};

export const removeItem = (id, item, product) => (dispatch) => {
    try {
        let tempProducts = [product];
        let cart = item;
        cart = cart.slice().filter(a => a.id !== id);
        const index = tempProducts.indexOf(getItem(id, tempProducts));
        let removedProducts = tempProducts[index];
        removedProducts.inCart = false;
        removedProducts.count = 0;
        removedProducts.total = 0;

        const updatedCart = cart;

        dispatch(removeProd(updatedCart))

    } catch (error) {
        dispatch(removeProdFailed(error))
    }
}

export const removeProd = (updatedCart) => ({
    type: ActionTypes.REMOVE_ITEM,
    payload: updatedCart,
})

export const removeProdFailed = (errMess) => ({
    type: ActionTypes.REMOVE_ITEM_FAILED,
    payload: errMess,
})