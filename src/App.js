import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation';

  class App extends Component {
    render() {
      let routes =  <Switch>
      <Navigation />
      <Route exact path="/">
        <Welcome name="Austin" />
      </Route>
      <Route 
        path="/welcome/:name"
        render={(props) => <Welcome {...props} name="Austin" />}
      />
      <Route path="/clock">
        <Clock />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
      return (
        <div className="App">
          {routes}
        </div>
      );
    }
  }
  export default App;
  {/* <Route path="/contact" component={Contact} /> */}