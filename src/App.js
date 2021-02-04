import React from 'react';
import { Route, BrowserRouter as Router, Switch, IndexRoute } from 'react-router-dom';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation';
import NoMatch from './components/404page/404Page';

  function App(props) {
      return (
        <Router>
          <div className="App">
            <Navigation />
            
            <Switch>
            <Route 
              exact
              path="/"
              render={(props) => <Welcome {...props} name="Austin" />}
            />
            <Route 
              path="/welcome/:name"
              component={Welcome} />} 
            />
            <Route path="/clock" component={Clock} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      );
    }
  export default App;