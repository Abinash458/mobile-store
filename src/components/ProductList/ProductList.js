import React from 'react';
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import Product from '../Product/Product';

const ProductList = (props) => {
    return (
        <React.Fragment>
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/home"> Home
                                </Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                Shop
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12 text-white">
                            <h3>Shop</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        {props.products.map((product) => {
                            return (
                                <Product
                                    key={product.id}
                                    product={product}
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