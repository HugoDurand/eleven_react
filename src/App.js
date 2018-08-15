import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route } from 'react-router';
import { Home } from './components/Home'

import createBrowserHistory from 'history/createBrowserHistory';
import { PlaneteDetail } from './components/PlaneteDetail';
const browserHistory = createBrowserHistory();


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={browserHistory}>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/planete/:id" component={PlaneteDetail} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
