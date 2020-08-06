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
                        className="img-container"
                        onClick={() => this.props.handleDetail(this.props.product)}
                    >
                        {/* <Link to="/details"> */}
                        <img src={image} alt="productImage" />
                        {/* </Link> */}
                        {/* <button
                            className="cart-btn"
                            disabled={inCart ? true : false}
                            onClick={() => {
                                this.props.addToCart(id);
                                this.props.openModal(id);
                            }}
                        >
                            {inCart ? (
                                <p className="text-capitalize mb-0" disabled>
                                    in cart
                                </p>
                            ) : (
                                    <i className="fas fa-cart-plus" />
                                )}
                        </button> */}
                    </div>
                    <div className="content-box">
                        <h3>{title}</h3>
                        <h5 className="price">
                            <span className="mr-1">&#8377;</span>
                            {price}
                        </h5>
                        <button disabled={inCart ? true : false} className="buy">{inCart ? (
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
  .img-container {
    position: relative;
    width: 100%;
    padding-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
  .img-container img {
      max-width: 80%;
      transition: 0.5s;
  }
  .card:hover .img-container img {
      max-width: 50%;
  }
  /* .card-img-top {
    transition: 0.5s;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }  */
  .card .content-box {
      position: relative;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      z-index: 1;
  }
  .card .content-box h3 {
      font-size: 16px;
      color: var(--mainWhite);
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1px;
  }
  .card .content-box .price {
      font-size: 20px;
      color: var(--mainWhite);
      font-weight: 500;
      letter-spacing: 1px;
  }
  .card .content-box .buy {
      position: relative;
      top: 200px;
      opacity: 0;
      padding: 10px 30px;
      color: var(--mainWhite);
      background-color: #2196f3;
      margin-top: 15px;
      border-radius: 30px;
      border: none;
      outline: none;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: 0.5s;
  }
  .card:hover .content-box .buy {
      top: 0;
      opacity: 1;
  }
  /* .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
  } */
  /* &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  } */
  /* .img-container {
    position: relative;
    overflow: hidden;
  } */
  /* .card-img-top {
    transition: all 0.5s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  } */
  /* .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.5s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  } */
`;
