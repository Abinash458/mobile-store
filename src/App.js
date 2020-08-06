import React, { Component } from 'react';
import './App.css';

import { Navbar, NavbarBrand } from 'reactstrap';

import { storeProducts } from './shared/productsData';
import ProductList from './components/ProductList/ProductList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: storeProducts
    }
  }


  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Product</NavbarBrand>
          </div>
        </Navbar>
        <ProductList products={this.state.products} />
      </div>
    );
  }
}

export default App;
