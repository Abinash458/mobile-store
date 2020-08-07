import React, { Component } from 'react'

export default class ProductDetail extends Component {

    renderComment = (product) => {
        if (product == null) {
            return (<div></div>)
        }
        const cmnts = product.comments.map(comment => {
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

    renderProduct = (product) => {
        if (product != null) {
            return (
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="img-container p-5">
                                <img src={product.image} alt="productImage" className="card-img-top" />
                                <p>{product.title}</p>
                                <p>{product.info}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        {this.renderComment(product)}
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }


    render() {
        return (
            <React.Fragment>
                <div className="py-4">
                    <div className="container">
                        {this.renderProduct(this.props.product)}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
