import React, { Component } from 'react';
import { Route,Switch, NavLink} from 'react-router-dom';

import WeatherPage from './weather/weatherpage';
import PostsIndex from '../containers/blog/posts_container';
import Home from './home/home'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
              <NavLink
                exact={true}
                to="/"
                activeClassName='active'
                className="nav-link"
                > Home
              </NavLink>
              <NavLink
                to="/posts"
                activeClassName='active'
                className="nav-link"
                > Blog
              </NavLink>
              <NavLink
                to="/weather"
                activeClassName='active'
                className="nav-link"
                > Weather
              </NavLink>
            </div>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/weather" component={WeatherPage} />
          <Route path="/posts" component={PostsIndex} />
        </Switch>
      </div>
    );
  }
}
