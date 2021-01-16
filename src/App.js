import React, { Component } from 'react';
  import logo from './logo.svg';
  import './App.css';
  //*** Import the Welcome component ***//
  import Welcome from './components/welcome/Welcome';
  //*** Import the Clock component ***//
  import Clock from './components/clock/Clock';
  //*** Import the Clock component ***//
  import Contact from './components/contact/Contact';
  class App extends Component {
    render() {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {/* Adding the Welcome component and passing the value "Eric" to the "name" prop */}
            <Welcome name="Zaddy" />
            {/* Added the clock component here.Clock doesn't require any props. It manages everything with it's internal state */}
          <Clock />
          {/* Added the Contact component here. */}
          <Contact />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      );
    }
  }
  export default App;