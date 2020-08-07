import React from 'react';
import Product from '../Product/Product';


const ProductList = (props) => {
    return (
        <React.Fragment>
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        {props.products.map((product) => {
                            return (
                                <Product
                                    key={product.id}
                                    product={product}
                                    handleDetail={props.handleDetail}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}

export default ProductList;