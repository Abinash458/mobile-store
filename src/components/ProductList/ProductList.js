import React, { Component } from 'react';
import Product from '../Product/Product';


class ProductList extends Component {

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
                                        handleDetail={this.props.handleDetail}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }

}

export default ProductList;