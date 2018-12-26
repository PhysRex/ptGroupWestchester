import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { NavBar, Routes } from './components/navigation';
import { Footer } from './components/templates';

import './style/scripts/customFontLoader.js';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';


// Shows debug console when not in production
if (process.env.NODE_ENV !== 'production') {
  localStorage.setItem('debug', 'PTG:*');
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar fixedNavLocation='top' />
          <Routes />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
