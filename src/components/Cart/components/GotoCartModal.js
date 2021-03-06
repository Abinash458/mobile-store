import React from "react";
import styled from "styled-components";
import { ButtonContainer } from "../../StyledComponents/Button";
import { Link } from "react-router-dom";
import { baseUrl } from "../../../shared/baseUrl";

const RenderModal = (props) => {
    const { image, title, price } = props.props.product;
    if (props.props.product != null) {
        return (
            <ModalContainer >
                <div className="container">
                    <div className="row">
                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                            <h5>item added to the cart</h5>
                            <img src={baseUrl + image} className="img-fluid" alt="product" />
                            <h5> {title} </h5>
                            <h5 className="text-muted">price: &#8377;{price}</h5>
                            <ButtonContainer
                                onClick={() => {
                                    props.props.toggleModal();
                                }}
                            >
                                back
                            </ButtonContainer>
                            <Link to="/cart">
                                <ButtonContainer
                                    cart
                                    onClick={() => {
                                        props.props.toggleModal();
                                    }}
                                >
                                    go to cart
                            </ButtonContainer>
                            </Link>
                        </div>
                    </div>
                </div>
            </ModalContainer>
        );
    } else {
        return (
            <div></div>
        );
    }
}

const Modal = (props) => {
    return (
        <div>
            {!props.modalOpen ? null : (
                <RenderModal props={props} />
            )}
        </div>
    );
}

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  #modal {
    background: var(--mainWhite);
  }
`;
