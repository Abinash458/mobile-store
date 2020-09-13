import React from 'react';
// import { Link } from "react-router-dom";
// import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Loading from '../Loading/LoadingComponent';
import Product from '../Product/Product';

const ProductList = (props) => {
    const Prod = props.products.products.map((product) => {
        return (
            <Product
                key={product.id}
                product={product}
            />
        );
    })
    if (props.products.isLoading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }
    else if (props.products.errMess) {
        return (
            <div>
                <h4 className="text-white py-5 m-0 text-center"> {props.products.errMess}</h4 >
            </div>
        );
    }
    else {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            {/* <Breadcrumb>
                                <BreadcrumbItem>
                                    <Link to="/home"> Home
                                    </Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem active>
                                    Shop
                                </BreadcrumbItem>
                            </Breadcrumb> */}
                            <div className="col-12 text-white">
                                <h3>Shop</h3>
                                <hr />
                            </div>
                        </div>
                        <div className="row">
                            {Prod}
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default ProductList;