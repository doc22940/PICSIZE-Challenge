import React, { Component } from 'react';
import Dashboard from './components/dashboard/index';
import Navbar from './components/navbar/index';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {

    return (
      <React.Fragment>
        <Navbar />
        <Dashboard />
      </React.Fragment>
    );
  }
}

export default App;