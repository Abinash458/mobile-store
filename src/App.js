import React, { Component } from 'react';
import './App.css';

import ComponentWrapper from './components/ComponentWrapper/ComponentWrapper';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <ComponentWrapper />
      </React.Fragment>
    );
  }
}

export default App;
