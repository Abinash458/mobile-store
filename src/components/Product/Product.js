import React, { Component } from 'react'
import styled from "styled-components";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class Product extends Component {

    handleDetail = (product) => {
        this.setState({ selectedProduct: product })
    }

    renderProduct = (product) => {
        if (product != null) {
            return (
                <div className="card mx-auto">
                    <div className="img-container p-5">
                        <img src={product.image} alt="productImage" className="card-img-top" />
                        <p>{product.title}</p>
                        <p>{product.info}</p>
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>);
        }
    }
    render() {
        const { id, title, image, price, inCart } = this.props.product;
        return (
            <ProductWrapper key={id} className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div
                        className="img-container p-5"
                        onClick={() => this.props.handleDetail(this.props.product)}
                    >
                        {/* <Link to="/details"> */}
                        <img src={image} alt="productImage" className="card-img-top" />
                        {/* </Link> */}
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0 card-title">{title}</p>
                        <h5 className="text-blue font-italic mb-0 price">
                            <span className="mr-1">&#8377;</span>
                            {price}
                        </h5>
                        <button disabled={inCart ? true : false}
                            // onClick={() => {
                            //     this.props.addToCart(id);
                            //     this.props.openModal(id);
                            // }}
                            className="buy">{inCart ? (
                                <p className="text-capitalize mb-0" disabled>
                                    in cart
                                </p>
                            ) : (
                                    <i className="fas fa-cart-plus" />
                                )}</button>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool,
    }).isRequired,
};

const ProductWrapper = styled.div`
  .card {
    position: relative;
    width: 100%;
    height: 300px;
    background-color: #122936;
    border-radius: 20px;
    overflow: hidden;
  }
  .card::before {
    content: '';
    position: absolute;
    top: -50%;
    width: 100%;
    height: 100%;
    background-color: #2196f3;
    transform: skewY(345deg);
    transition: 0.5s;
  }
  .card:hover::before {
      top: -70%;
      transform: skewY(390deg);
  }
  .card-footer {
    border-top: transparent;
    transition: all 0.5s linear;
  } 
    &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      /* box-shadow: 2px 2px 5px 0px rgba(33,150,243, 0.7); */
    }
    .card-footer {
      background: #2196f3;
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.5s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .card-title {
      color: var(--mainWhite);
      font-weight: 500;
      text-transform: uppercase;
  }
  .price {
      color: var(--mainWhite);
      font-weight: 500;
  }
  .buy {
      position: absolute;
      left: 50%;
      top: 100%;
      transform: translate(-50%, -50%);
      opacity: 0;
      padding: 10px 30px;
      color: var(--mainWhite);
      background-color: #2196f3;
      margin-top: 15px;
      border-radius: 30px;
      border: none;
      outline: none;
      text-transform: uppercase;
      /* letter-spacing: 1px; */
      transition: 0.5s;
  } 
  .card:hover .buy {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      opacity: 1;
  }
`;
