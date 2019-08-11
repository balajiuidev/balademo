import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import StepsCard from './pages/StepsCard';
import StepsForm from './pages/StepsForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/">
        <div className="App">
          <div className="App__Aside">
          <img src="https://www.rhbgroup.com/images/global/logo_default.png" alt="Smiley face" height="auto" width="auto"></img>
          </div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <h5>Welcome to RHB</h5>
                <span></span>
                </div>
              {/* <div className="FormTitle">
                  <NavLink to="/Debit-Card" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Debit Card</NavLink> or
                   <NavLink exact to="/Credit-Card" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Credit Card</NavLink>
              </div> */}
              <Route path="/Debit-Card" component={StepsForm}>
              </Route>
              <Route exact path="/Credit-Card" component={StepsCard}>
              </Route>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
