import React from "react";
import { Link } from 'react-router-dom'

import { ButtonContainer } from "../../StyledComponents/Button";

const EmptyCart = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title text-white">
                    <h5 className="my-4">your cart is currently empty</h5>
                    <Link to="/shop">
                        <ButtonContainer>Continue Shopping</ButtonContainer>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EmptyCart;