import React from "react";
import { Link } from "react-router-dom";

const CartTotals = (props) => {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = props;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-6 text-capitalize text-right text-white">
                        <Link to="/">
                            <button
                                onClick={() => clearCart()}
                                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                                type="button"
                            >
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">
                                subtotal :{" "}
                                <span>
                                    <strong>&#8377;{cartSubTotal}</strong>
                                </span>
                            </span>
                        </h5>
                        <h5>
                            <span className="text-title">
                                tax :{" "}
                                <span>
                                    <strong>&#8377;{cartTax}</strong>
                                </span>
                            </span>
                        </h5>
                        <div className="my-3" style={{ borderTop: "1px dashed black" }} />
                        <h5>
                            <span className="text-title">
                                total :{" "}
                                <span>
                                    <strong>&#8377;{cartTotal}</strong>
                                </span>
                            </span>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CartTotals;