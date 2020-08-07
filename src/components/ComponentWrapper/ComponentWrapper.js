import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import { storeProducts } from '../../shared/productsData';

import Header from '../Header/Header';
import Home from '../Home/Home';
import ProductList from '../ProductList/ProductList';
// import ProductDetail from "../ProductDetail/ProductDetail";
import Footer from "../Footer/Footer";

export default class ComponentWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: storeProducts,
            // selectedProduct: null,
        }
    }

    // getItem = (productId) => {
    //     const product = this.state.products.find((item) => item.id === productId);
    //     return product;
    // };

    // handleDetail = (productId) => {
    //     const product = this.getItem(productId);
    //     this.setState({ selectedProduct: product });
    // }

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/shop" component={() => <ProductList products={this.state.products} />} />
                    <Redirect to="/home" />
                </Switch>
                {/* <ProductList products={this.state.products} handleDetail={this.handleDetail} /> */}
                {/* <ProductDetail product={this.state.selectedProduct} /> */}
                <Footer />
            </div>
        )
    }
}
