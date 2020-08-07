import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import { storeProducts } from '../../shared/productsData';
import { PROMOTIONS } from '../../shared/promotion';
import { COMMENTS } from '../../shared/comments';

import Header from '../Header/Header';
import Home from '../Home/Home';
import ProductList from '../ProductList/ProductList';
// import ProductDetail from "../ProductDetail/ProductDetail";
import ContactPage from "../Contact/ContactPage";
import Footer from "../Footer/Footer";
import ProductDetail from '../ProductDetail/ProductDetail';

export default class ComponentWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: storeProducts,
            comments: COMMENTS,
            promotions: PROMOTIONS,
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
                <Home featuredProduct={this.state.products.filter((product) => product.featured)[0]}
                    featuredPromotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
                />
            );
        }

        const DishWithId = ({ match }) => {
            return (
                <ProductDetail
                    product={this.state.products.filter((product) => product.id === parseInt(match.params.productId, 10))[0]}
                    comments={this.state.comments.filter((comment) => comment.productId === parseInt(match.params.productId, 10))}
                />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/shop" component={() => <ProductList products={this.state.products} />} />
                    <Route path='/shop/:productId' component={DishWithId} />
                    <Route exact path='/contactus' component={ContactPage} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        )
    }
}
