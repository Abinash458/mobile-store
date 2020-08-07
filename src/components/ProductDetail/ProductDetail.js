import React from 'react'
import styled from "styled-components";


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
            <h2 className='py-4 text-white'>Comments</h2>
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
                        <h3>{product.title}</h3>
                        <p>{product.info}</p>
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
                            <div className="col-md-6">
                                <RenderProduct product={props.product} />
                            </div>
                            <div className="col-md-6">
                                <RenderComment comments={props.product.comments} />
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
        background: #2196f3;
    }
    .img-container {
        position: relative;
        overflow: hidden;
    }
`