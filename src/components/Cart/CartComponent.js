import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";
// import styled from "styled-components";

import EmptyCart from './components/EmptyCart';
import CartColumns from "./components/CartColumns";
import CartList from "./components/CartList";
import CartTotals from "./components/CartTotals";

const CartComponent = (props) => {
    if (props.cart.length > 0) {
        return (
            <React.Fragment>
                <div className="py-5">
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
                            <CartTotals {...props} />
                        </div>
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

export default CartComponent;

// const CartWrapper = styled.div`

// `