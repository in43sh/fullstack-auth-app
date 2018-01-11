import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import AccountInfo from './components/AccountInfo';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/"  component={ Home } exact />
        <Route path="/private" component={ AccountInfo } />
      </div>
    );
  }
}

export default App;
