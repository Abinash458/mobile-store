import React, { Component } from 'react';

import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

import { Provider } from 'react-redux';
import store from './redux/configureStore';

import ComponentWrapper from './components/ComponentWrapper/ComponentWrapper';


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <ComponentWrapper />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
