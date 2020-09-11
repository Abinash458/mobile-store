import React from "react";
import { baseUrl } from "../../../shared/baseUrl";

const CartItem = (props) => {
    const { id, title, image, price, total, count } = props.item;
    const { increment, decrement, removeItem } = props;
    return (
        <div className="row py-4 text-capitalize text-center text-white">
            <div className="col-10 mx-auto col-lg-2 d-flex justify-content-center align-items-center">
                <img
                    src={baseUrl + image}
                    style={{ width: "5rem", height: "5rem" }}
                    className="img-fluid"
                    alt="product"
                />
            </div>
            <div className="col-10 mx-auto col-lg-2 d-flex justify-content-center align-items-center">
                <span className="d-lg-none"> product : </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2 d-flex justify-content-center align-items-center">
                <span className="d-lg-none"> price : </span>{" "}
                <strong>&#8377;{price}</strong>
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() => decrement(id, props.cart)}>
                            -
                        </span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={() => increment(id, props.cart)}>
                            +
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 d-flex justify-content-center align-items-center">
                <div className="cart-icon" onClick={() => removeItem(id, props.cart, props.item)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 d-flex justify-content-center align-items-center">
                <strong> item total: &#8377; </strong>
                {total}
            </div>
        </div>
    );
};

export default CartItem;