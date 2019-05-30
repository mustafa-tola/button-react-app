import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/home.js"
import Contact from "./components/contact.js"
import About from "./components/about.js"


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Contact />
        <About />
      </div>
    );
  }
}

export default App;
