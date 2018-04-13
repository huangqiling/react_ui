import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { HashRouter as Router } from 'react-router-dom';
import routes from './routes';
import Nav from './Layout/Nav';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Nav>
          <Router>{routes}</Router>
        </Nav>
      </Provider>
    );
  }
}

export default App;
