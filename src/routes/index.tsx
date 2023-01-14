import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Gaming from '../pages/Gaming';
import Home from '../pages/Home';
import Social from '../pages/Social';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/social" component={Social} />
        <Route path="/gaming" component={Gaming} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;