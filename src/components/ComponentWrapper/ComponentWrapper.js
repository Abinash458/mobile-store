import React, { Component } from 'react';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

import { addComment, fetchProduct } from '../../redux/Actions/ActionCreators';

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

const mapDispatchToProps = (dispatch) => ({
    addComment: (productId, rating, author, comment) => dispatch(addComment(productId, rating, author, comment)),
    fetchProduct: () => { dispatch(fetchProduct()) },
    resetFeedbackForm: () => { dispatch(actions.reset('feedback')) }
});

class ComponentWrapper extends Component {


    componentDidMount() {
        this.props.fetchProduct()
    }

    render() {
        const HomePage = () => {
            return (
                <Home featuredProduct={this.props.products.products.filter((product) => product.featured)[0]}
                    productsLoading={this.props.products.isLoading}
                    productsErrMess={this.props.products.errMess}
                    featuredPromotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
                />
            );
        }

        const ProductWithId = ({ match }) => {
            return (
                <ProductDetail
                    product={this.props.products.products.filter((product) => product.id === parseInt(match.params.productId, 10))[0]}
                    isLoading={this.props.products.isLoading}
                    errMess={this.props.products.errMess}
                    comments={this.props.comments.filter((comment) => comment.productId === parseInt(match.params.productId, 10))
                    } openModal={this.openModal}
                    addComment={this.props.addComment}
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
                    <Route exact path='/contactus' component={() => <ContactPage resetFeedbackForm={this.props.resetFeedbackForm} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ComponentWrapper));
