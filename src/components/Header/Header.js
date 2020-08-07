import React, { Component } from 'react';

import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';


export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        }
    }

    toggleNav = () => {
        this.setState({ isNavOpen: !this.state.isNavOpen });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="text-uppercase mr-4" href="/">Product Catalog</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem onClick={this.toggleNav}>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-bg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem onClick={this.toggleNav}>
                                    <NavLink className="nav-link" to="/shop">
                                        <span className="fa fa-shopping-bag fa-bg"></span> Shop
                                    </NavLink>
                                </NavItem>
                                <NavItem onClick={this.toggleNav}>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-bg"></span> Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
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
            </React.Fragment>
        )
    }
}
