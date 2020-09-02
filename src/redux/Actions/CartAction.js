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
            removeItem(id);
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
export const removeItem = (id, cart, product) => (dispatch) => {
    try {
        let tempProducts = product;
        let tempCart = cart;
        tempCart = tempCart.filter((item) => item.id !== id);
        // const prod = product.find((items) => items.id === id);
        // const index = tempProducts.indexOf(prod);
        // console.log(index)
        // let removedProducts = tempProducts[index];
        tempProducts.inCart = false;
        tempProducts.count = 0;
        tempProducts.total = 0;

        const updatedCartProduct = [...tempCart, tempProducts]

        dispatch(removeProd(updatedCartProduct))

    } catch (error) {
        dispatch(removeProdFailed(error))
    }
}

export const removeProd = (updatedCartProduct) => ({
    type: ActionTypes.REMOVE_ITEM,
    payload: updatedCartProduct,
})

export const removeProdFailed = (errMess) => ({
    type: ActionTypes.REMOVE_ITEM_FAILED,
    payload: errMess,
})