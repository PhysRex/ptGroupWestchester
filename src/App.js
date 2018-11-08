import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { NavBar, Routes } from './components/navigation';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
