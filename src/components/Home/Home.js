import React from 'react';
import styled from "styled-components";
import Loading from '../Loading/LoadingComponent';
import { baseUrl } from '../../shared/baseUrl';
import { Jumbotron } from 'reactstrap';

function RenderCard({ item, isLoading, errMess }) {
    if (isLoading) {
        return (
            <Loading />
        )
    }
    else if (errMess) {
        return (
            <h4 className="text-white py-5 m-0 text-center">{errMess}</h4>
        )
    }
    else {
        return (
            <FeaturedCard className="py-5">
                <div className="card">
                    <div className="img-container p-5">
                        <img src={baseUrl + item.image} alt={item.title} className="card-img-top" />
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-between">
                            <h3 className="align-self-center">{item.title}</h3>
                            {
                                item.label === "New" ? <h5 className="align-self-center text-danger"><span className="fa fa-star"></span> New</h5> : null
                            }
                        </div>
                        <p className="my-2">{item.info}</p>
                    </div>
                </div>
            </FeaturedCard>
        )
    }
}

function Home(props) {
    return (
        <div>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Product Catalog</h1>
                            <p>We are having the best range of cell phones. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <div className="container">
                <div className="row align-item-center">
                    <div className="col-12 col-md">
                        <RenderCard
                            item={props.featuredProduct}
                            isLoading={props.productsLoading}
                            errMess={props.productsErrMess} />
                    </div>
                    <div className="col-12 col-md">
                        <RenderCard
                            item={props.featuredPromotion}
                            isLoading={props.promotionsLoading}
                            errMess={props.promotionsErrMess}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

const FeaturedCard = styled.div`
    .card {
        position: relative;
        background-color: var(--headerFooterBackground);
        border-radius: 20px;
        overflow: hidden;
    }
    .card::before {
        content: '';
        position: absolute;
        top: -50%;
        width: 100%;
        height: 100%;
        background-color: #2196f3;
        transform: skewY(345deg);
        transition: 0.5s;
    }
    /* .card:hover::before {
        top: -70%;
        transform: skewY(390deg);
    } */
    .card-footer {
        border-top: transparent;
        transition: all 0.5s linear;
        background: #2196f3;
    }
    .img-container {
        position: relative;
        overflow: hidden;
    }
`