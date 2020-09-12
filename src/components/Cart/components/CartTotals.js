import React from "react";

const CartTotals = (props) => {
    const { clearCart } = props;
    const { cartSubTotal, cartTax, cartTotal } = props.totalPrice;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-6 text-capitalize text-right text-white">
                        <button
                            onClick={() => clearCart()}
                            className="btn btn-outline-danger text-uppercase mb-3 px-5"
                            type="button"
                        >
                            clear cart
                            </button>
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
                        <div className="my-3" style={{ borderTop: "1px dashed white" }} />
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