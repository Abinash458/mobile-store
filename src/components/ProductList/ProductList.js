import React, { Component } from 'react';
import { Media } from 'reactstrap';

class ProductList extends Component {

    render() {
        const product = this.props.products.map(product => {
            return (
                <div key={product.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object data-src={product.image} alt={product.title} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>
                                {product.title}
                                <p>{product.info}</p>
                            </Media>
                        </Media>
                    </Media>
                </div>
            )
        });
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <Media list>
                            {product}
                        </Media>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default ProductList;