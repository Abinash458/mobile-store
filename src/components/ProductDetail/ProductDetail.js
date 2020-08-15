import React, { useState } from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import { ButtonContainer } from '../StyledComponents/Button';
import Modal from "../Cart/components/GotoCartModal";
import CommentModel from "./components/CommentModel";
import ReadOnlyStarRating from './components/ReadOnlyStarRating';
import Loading from '../Loading/LoadingComponent';
import { baseUrl } from '../../shared/baseUrl';

const RenderComment = ({ comments, postComment, productId, toggleCommentModal, commentModalOpen }) => {

    if (comments == null) {
        return (<div></div>)
    }
    const cmnts = comments.map(comment => {
        return (
            <li key={comment.id}>
                <div className="d-flex justify-content-between">
                    <h6 style={{ flexBasis: '60%' }} className="text-primary">{comment.comment}</h6>
                    <ReadOnlyStarRating style={{ flexBasis: '40%' }} comments={comment.rating} />
                </div>

                <p className="text-muted text-right">-- {comment.author},
                        &nbsp;
                        {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit'
                }).format(new Date(comment.date))}
                </p>
                <hr />
                <CommentModel
                    toggleModal={toggleCommentModal}
                    modalOpen={commentModalOpen}
                    postComment={postComment}
                    productId={productId}
                />
            </li>
        )
    })
    return (
        <div>
            <h5 className='py-3 text-white'>Reviews:</h5>
            <ul className='list-unstyled'>
                {cmnts}
            </ul>
        </div>
    )
}

const RenderProduct = ({ product }) => {
    const { title, image, price, info } = product;
    if (product != null) {
        return (
            <ProductDetailWrapper>
                <div className="card">
                    <div className="img-container p-5">
                        <img alt={title} src={baseUrl + image} className="card-img-top" />
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-between">
                            <h3 className="align-self-center">{title}</h3>
                            <h3>
                                <span className="mr-1">&#8377;</span>
                                {price}
                            </h3>
                        </div>
                        <p className="my-2 text-center">{info}</p>
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

    const [modalOpen, setmodalOpen] = useState(false);
    const [commentModalOpen, setcommentModalOpen] = useState(false);

    const toggleCommentModal = () => {
        setcommentModalOpen(!commentModalOpen)
    }

    const toggleModal = () => {
        setmodalOpen(!modalOpen);
    }

    if (props.isLoading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div>
                <h4 className="text-white py-5 m-0 text-center">{props.errMess}</h4>
            </div>
        );
    }
    else if (props.product != null) {
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
                            <div className="col-md-6 py-3">
                                <table style={{ width: '100%' }}>
                                    <tbody>
                                        <tr style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <td style={{ flexBasis: "40%" }} className="text-white text-capitalize"><h4>model</h4></td>
                                            <td style={{ flexBasis: "60%" }} className="text-white text-capitalize"><h4>{props.product.title}</h4></td>
                                        </tr>
                                        <tr style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <td style={{ flexBasis: "40%" }} className="text-white text-capitalize"><h5>made by</h5></td>
                                            <td style={{ flexBasis: "60%" }} className="text-white text-capitalize"><h5>{props.product.company}</h5></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <RenderComment
                                    comments={props.comments}
                                    postComment={props.postComment}
                                    productId={props.product.id}
                                    toggleCommentModal={toggleCommentModal}
                                    commentModalOpen={commentModalOpen}
                                />
                                <div className="py-2">
                                    <ButtonContainer
                                        cart
                                        disabled={props.product.inCart ? true : false}
                                        onClick={() => {
                                            props.addToCart(props.product);
                                            toggleModal();
                                        }}
                                    >
                                        {props.product.inCart ? "inCart" : "add to cart"}
                                    </ButtonContainer>
                                    <ButtonContainer
                                        onClick={() => toggleCommentModal()}
                                    >
                                        Add Comment
                                    </ButtonContainer>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
                    toggleModal={toggleModal}
                    modalOpen={modalOpen}
                    product={props.product}
                />
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
    .table-wrapper {
        width: 100%;
    }
    .tableRow {
       display: flex;
       justify-content: space-between;
    }
`