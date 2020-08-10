import React, { Component } from 'react';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import Header from '../Header/Header';
import Home from '../Home/Home';
import ProductList from '../ProductList/ProductList';
import ProductDetail from '../ProductDetail/ProductDetail';
import ContactPage from "../Contact/ContactPage";
import Footer from "../Footer/Footer";


const mapStateToProps = state => {
    return {
        products: state.products,
        comments: state.comments,
        promotions: state.promotions,
    }
}


class ComponentWrapper extends Component {

    render() {

        const HomePage = () => {
            return (
                <Home featuredProduct={this.props.products.filter((product) => product.featured)[0]}
                    featuredPromotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
                />
            );
        }

        const ProductWithId = ({ match }) => {
            return (
                <ProductDetail
                    product={this.props.products.filter((product) => product.id === parseInt(match.params.productId, 10))[0]}
                    comments={this.props.comments.filter((comment) => comment.productId === parseInt(match.params.productId, 10))
                    } openModal={this.openModal}
                />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/shop" component={() => <ProductList products={this.props.products} />} />
                    <Route path='/shop/:productId' component={ProductWithId} />
                    <Route exact path='/contactus' component={ContactPage} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(ComponentWrapper));
