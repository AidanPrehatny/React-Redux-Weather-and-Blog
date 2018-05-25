import React, { Component } from 'react';
import { Route,Switch, NavLink } from 'react-router-dom';

import WeatherPage from './weather/weatherpage';
import Blog from './blog/blog';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <div className="collapse navbar-collapse" id="navbarNav">
              <NavLink
                to="/weather"
                className="nav-item"
                activeClassName='active'
                >
                Weather
              </NavLink>
              <NavLink
                to="/"
                exact={true}
                className="nav-item"
                activeClassName='active'
                >
                Blog
              </NavLink>
            </div>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={Blog} />
          <Route path="/weather" component={WeatherPage} />
        </Switch>
      </div>
    );
  }
}
