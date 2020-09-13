import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import { ButtonContainer } from '../StyledComponents/Button';


export default class Header extends Component {

    state = {
        isNavOpen: false,
        isLoginModalOpen: false
    }

    toggleNav = () => {
        this.setState({ isNavOpen: !this.state.isNavOpen });
    }

    toggleLoginModal = () => {
        this.setState({ isLoginModalOpen: !this.state.isLoginModalOpen });
    }

    handleLogin = (e) => {
        e.preventDefault();
        this.toggleLoginModal();
        alert("UserName: " + this.username.value + "Password: " + this.password.value + "Remember: " + this.remember.checked);
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="text-uppercase mr-4" href="/">Product</NavbarBrand>
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
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    {/* <ButtonContainer onClick={this.toggleLoginModal}>
                                        <span className="fa fa-sign-in fa-lg"></span> Login
                                    </ButtonContainer> */}
                                    <Link to="/cart">
                                        <ButtonContainer cart>
                                            <span className="fas fa-cart-plus"></span> My Cart
                                        </ButtonContainer>
                                    </Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                {/* <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Product Catalog</h1>
                                <p>We are having the best range of cell phones. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron> */}
                <Modal isOpen={this.state.isLoginModalOpen} toggle={this.toggleLoginModal}>
                    <ModalHeader toggle={this.toggleLoginModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">
                                    Username
                                </Label>
                                <Input type="text" id="username" name="username" innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">
                                    Password
                                </Label>
                                <Input type="password" id="password" name="password" innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}
