import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router } from 'react-router-dom';
import routes from './routes';
import Nav from './Layout/Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Nav>
          <Router>{routes}</Router>
        </Nav>
      </div>
    );
  }
}

export default App;
