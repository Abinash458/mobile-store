import React, { Component } from 'react';

import { Navbar, NavbarBrand } from 'reactstrap';

import { storeProducts } from '../../shared/productsData';
import ProductList from '../ProductList/ProductList';
import ProductDetail from "../ProductDetail/ProductDetail";

export default class ComponentWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: storeProducts,
            selectedProduct: null,
        }
    }

    getItem = (productId) => {
        const product = this.state.products.find((item) => item.id === productId);
        return product;
    };

    handleDetail = (productId) => {
        const product = this.getItem(productId);
        this.setState({ selectedProduct: product });
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Product</NavbarBrand>
                    </div>
                </Navbar>
                <ProductList products={this.state.products} handleDetail={this.handleDetail} />
                <ProductDetail product={this.state.selectedProduct} />
            </div>
        )
    }
}
