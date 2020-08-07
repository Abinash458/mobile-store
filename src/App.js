import React, { Component } from 'react';

import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

import ComponentWrapper from './components/ComponentWrapper/ComponentWrapper';

class App extends Component {

  render() {
    return (
      <Router>
        <React.Fragment>
          <ComponentWrapper />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
