import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";
// import styled from "styled-components";

import EmptyCart from './components/EmptyCart';
import CartColumns from "./components/CartColumns";
import CartList from "./components/CartList";

const Cart = (props) => {
    // console.log(props.cartItems.lenght)
    if (props.cartItems.cartItems.length > 0) {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/shop">Shop</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                My Cart
                     </BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12 text-white">
                            <h3>My Cart</h3>
                            <hr />
                        </div>
                        <CartColumns />
                        <CartList {...props} />
                        {/* <CartTotals {...props} /> */}
                    </div>
                </div>
            </React.Fragment>
        );
    }
    else {
        return (
            <EmptyCart />
        )
    }
}

export default Cart;

// const CartWrapper = styled.div`

// `