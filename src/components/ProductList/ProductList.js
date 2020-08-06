import React, { Component } from 'react';
import Product from '../Product/Product';


class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProduct: null,
        }
    }

    handleDetail = (product) => {
        this.setState({ selectedProduct: product })
    }

    renderComment = (product) => {
        if (product == null) {
            return (<div></div>)
        }
        const cmnts = product.comments.map(comment => {
            return (
                <li key={comment.id}>
                    <h6 className="text-slanted">{comment.comment}</h6>
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
                <h2 className='py-4 text-blue'>All Comments Here</h2>
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
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            {this.props.products.map((product) => {
                                return (
                                    <Product
                                        key={product.id}
                                        product={product}
                                        handleDetail={this.handleDetail}
                                    />
                                );
                            })}
                        </div>
                        <div>
                            {this.renderProduct(this.state.selectedProduct)}
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }

}

export default ProductList;