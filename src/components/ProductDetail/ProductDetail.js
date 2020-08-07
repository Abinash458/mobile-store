import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';


const RenderComment = ({ comments }) => {
    if (comments == null) {
        return (<div></div>)
    }
    const cmnts = comments.map(comment => {
        return (
            <li key={comment.id}>
                <h6 className="text-primary">{comment.comment}</h6>
                <p className="text-muted">-- {comment.author},
                        &nbsp;
                        {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit'
                }).format(new Date(comment.date))}
                </p>
            </li>
        )
    })
    return (
        <div>
            <h5 className='py-4 text-white'>Comments:</h5>
            <ul className='list-unstyled'>
                {cmnts}
            </ul>
        </div>
    )
}

const RenderProduct = ({ product }) => {
    if (product != null) {
        return (
            <ProductDetailWrapper>
                <div className="card">
                    <div className="img-container p-5">
                        <img src={product.image} alt="productImage" className="card-img-top" />
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-between">
                            <h3 className="align-self-center">{product.title}</h3>
                            <h3 className="font-italic">
                                <span className="mr-1">&#8377;</span>
                                {product.price}
                            </h3>
                        </div>
                        <p className="my-2 text-center">{product.info}</p>
                    </div>
                </div>
            </ProductDetailWrapper>
        );
    } else {
        return (
            <div></div>
        );
    }
}

const ProductDetail = (props) => {
    if (props.product != null) {
        return (
            <React.Fragment>
                <div className="py-4">
                    <div className="container">
                        <div className="row">
                            <Breadcrumb>
                                <BreadcrumbItem>
                                    <Link to="/shop">Shop</Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem active>
                                    {props.product.title}
                                </BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12 text-white">
                                <h3>{props.product.title}</h3>
                                <hr />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <RenderProduct product={props.product} />
                            </div>
                            <div className="col-md-6 py-4">
                                <h2 className="text-white text-capitalize">model: {props.product.title}</h2>
                                <h4 className="text-white text-uppercase mt-3 mb-2">
                                    made by: <span className="text-uppercase">{props.product.company}</span>
                                </h4>
                                <RenderComment comments={props.comments} />
                                {/* {console.log(props.comments)} */}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default ProductDetail;


const ProductDetailWrapper = styled.div`
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
        background: #2196f3;
    }
    .img-container {
        position: relative;
        overflow: hidden;
    }
`