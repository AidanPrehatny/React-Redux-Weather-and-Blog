import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import WeatherPage from './weather/weatherpage';
import PostsIndex from '../containers/blog/posts_container';
import Home from './home/home';

import PostsNew from './blog/postsNew';
import PostsShow from './blog/postsShow';

const App = () => (
  <div className="container">
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar" id="navbarNav">
          <NavLink
            exact
            to="/"
            activeClassName="active"
            className="nav-link"
          > Home
          </NavLink>
          <NavLink
            to="/posts"
            activeClassName="active"
            className="nav-link"
          > Blog
          </NavLink>
          <NavLink
            to="/weather"
            activeClassName="active"
            className="nav-link"
          > Weather
          </NavLink>
        </div>
      </nav>
    </header>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/weather" component={WeatherPage} />
      <Route exact path="/posts" component={PostsIndex} />
      <Switch>
        <Route exact path="/posts/new" component={PostsNew} />
        <Route exact path="/posts/:id" component={PostsShow} />
      </Switch>
    </Switch>
  </div>
);

export default App;
