import React, { Component } from 'react';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

import { postComment, postFeedback, fetchProduct, fetchComments, addToCart, fetchPromotions } from '../../redux/Actions/ActionCreators';

import Header from '../Header/Header';
import Home from '../Home/Home';
import ProductList from '../ProductList/ProductList';
import ProductDetail from '../ProductDetail/ProductDetail';
import ContactPage from "../Contact/ContactPage";
import Footer from "../Footer/Footer";
import CartComponent from '../Cart/CartComponent';

class ComponentWrapper extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         cart: []
    //     }
    // }


    componentDidMount() {
        this.props.fetchProduct()
        this.props.fetchComments()
        this.props.fetchPromotions()
    }

    // handleAddToCart = (product) => {
    //     // const existingProductIndex = this.state.cart.findIndex(ep => ep.id === product.id);
    //     // if (existingProductIndex >= 0) {

    //     //     const cartProducts = this.state.cart.slice();

    //     //     const existingProduct = cartProducts[existingProductIndex];

    //     //     product.inCart = true;
    //     //     product.count = 1;
    //     //     const price = product.price;
    //     //     product.total = price;
    //     //     this.setState(
    //     //         () => {
    //     //             return {
    //     //                 cart: existingProduct
    //     //             };
    //     //         }
    //     //     );
    //     // }
    //     // else {
    //     //     this.setState(
    //     //         () => {
    //     //             return {
    //     //                 cart: [...this.state.cart, product],
    //     //             };
    //     //         }
    //     //     );
    //     // }
    //     product.inCart = true;
    //     product.count = 1;
    //     const price = product.price;
    //     product.total = price;
    //     this.setState(
    //         () => {
    //             return {
    //                 cart: [...this.state.cart, product],
    //             };
    //         }
    //     );
    // }

    render() {
        // console.log("Cart", this.props.cart.cart)
        const HomePage = () => {
            return (
                <Home featuredProduct={this.props.products.products.filter((product) => product.featured)[0]}
                    productsLoading={this.props.products.isLoading}
                    productsErrMess={this.props.products.errMess}
                    featuredPromotion={this.props.promotions.promotions.filter((promotion) => promotion.featured)[0]}
                    promotionsLoading={this.props.promotions.isLoading}
                    promotionsErrMess={this.props.promotions.errMess}
                />
            );
        }

        const ProductWithId = ({ match }) => {
            return (
                <ProductDetail
                    product={this.props.products.products.filter((product) => product.id === parseInt(match.params.productId, 10))[0]}
                    isLoading={this.props.products.isLoading}
                    errMess={this.props.products.errMess}
                    comments={this.props.comments.comments.filter((comment) => comment.productId === parseInt(match.params.productId, 10))
                    }
                    commentsErrMess={this.props.comments.errMess}
                    postComment={this.props.postComment}
                    addToCart={this.props.addToCart}
                    cartItems={this.props.cart.cart}
                // handleAddToCart={this.handleAddToCart}
                />
            );
        }

        const CartWithId = () => {
            return (
                <CartComponent
                    cart={this.props.cart.cart}
                />
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/shop" component={() => <ProductList products={this.props.products} />} />
                    <Route path='/shop/:productId' component={ProductWithId} />
                    <Route exact path="/cart" component={CartWithId} />
                    <Route exact path='/contactus' component={() => <ContactPage resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
        comments: state.comments,
        promotions: state.promotions,
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchProduct: () => { dispatch(fetchProduct()) },
    fetchComments: () => { dispatch(fetchComments()) },
    fetchPromotions: () => { dispatch(fetchPromotions()) },
    resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
    postComment: (productId, rating, author, comment) => dispatch(postComment(productId, rating, author, comment)),
    postFeedback: (firstName, lastName, telNum, email, agree, contactType, message) => dispatch(postFeedback(firstName, lastName, telNum, email, agree, contactType, message)),
    addToCart: (product, items) => dispatch(addToCart(product, items)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ComponentWrapper));
