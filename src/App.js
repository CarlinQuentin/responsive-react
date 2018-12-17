import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './Components/Landing';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Landing />
        </Router>
          <Footer />
      </div>
    );
  }
}

export default App;
