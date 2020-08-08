import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Product = (props) => {
  const { id, title, image, price } = props.product;
  return (
    <ProductWrapper key={id} className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <Link to={`/shop/${id}`}>
        <div className="card">
          <div
            className="img-container p-5"
          // onClick={}
          >
            <img src={image} alt="productImage" className="card-img-top" />
          </div>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0 card-title">{title}</p>
            <h5 className="text-blue font-italic mb-0 price">
              <span className="mr-1">&#8377;</span>
              {price}
            </h5>
            {/* <button disabled={inCart ? true : false}
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
                )}</button> */}
          </div>
        </div>
      </Link>
    </ProductWrapper>
  )
}

export default Product;

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
    background-color: var(--headerFooterBackground);
    border-radius: 20px;
    overflow: hidden;
  }
  .card::before {
    content: '';
    position: absolute;
    top: -50%;
    width: 100%;
    height: 100%;
    background-color: var(--secondaryBackground);
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
      background: var(--secondaryBackground);
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
      background-color: var(--secondaryBackground);
      margin-top: 15px;
      border-radius: 30px;
      border: none;
      outline: none;
      text-transform: uppercase;
      transition: 0.5s;
  } 
  .card:hover .buy {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      opacity: 1;
  }
`;
