import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import { storeProducts } from '../../shared/productsData';
import { PROMOTIONS } from '../../shared/promotion';
import { COMMENTS } from '../../shared/comments';

import Header from '../Header/Header';
import Home from '../Home/Home';
import ProductList from '../ProductList/ProductList';
import ProductDetail from '../ProductDetail/ProductDetail';
import ContactPage from "../Contact/ContactPage";
import Footer from "../Footer/Footer";
// import Modal from '../Cart/components/GotoCartModal';

export default class ComponentWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: storeProducts,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            // modalOpen: false,
            // selectedProduct: null
        }
    }

    // getItem = (id) => {
    //     const product = this.state.products.filter((item) => item.id === id);
    //     return product;
    // };

    // handleDetail = (productId) => {
    //     const product = this.getItem(productId);
    //     this.setState({ selectedProduct: product });
    // }

    // openModal = (id) => {
    //     this.setState(() => {
    //         return { modalOpen: true, };
    //     });
    // };

    // closeModal = () => {
    //     this.setState(() => {
    //         return { modalOpen: false };
    //     });
    // };

    render() {

        const HomePage = () => {
            return (
                <Home featuredProduct={this.state.products.filter((product) => product.featured)[0]}
                    featuredPromotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
                />
            );
        }

        const ProductWithId = ({ match }) => {
            return (
                <ProductDetail
                    product={this.state.products.filter((product) => product.id === parseInt(match.params.productId, 10))[0]}
                    comments={this.state.comments.filter((comment) => comment.productId === parseInt(match.params.productId, 10))
                    } openModal={this.openModal}
                />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/shop" component={() => <ProductList products={this.state.products} />} />
                    <Route path='/shop/:productId' component={ProductWithId} />
                    <Route exact path='/contactus' component={ContactPage} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
                {/* <Modal
                    openModal={this.openModal}
                    closeModal={this.closeModal}
                    modalOpen={this.state.modalOpen}
                    modalProduct={this.state.selectedProduct}
                /> */}
            </div>
        )
    }
}
