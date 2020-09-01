import React from "react";
import CartItem from "./CartItem";

const CartList = (props) => {
    // const { cart } = props;
    // console.log("cart =>", props.cartItems)
    return (
        <div className="container-fluid">
            {props.cart.map((item) => {
                return <CartItem key={item.id} item={item} {...props} />;
            })}
        </div>
    );
};

export default CartList;