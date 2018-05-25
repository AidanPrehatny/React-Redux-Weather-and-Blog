import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'

import WeatherPage from './weatherpage';
import Blog from './blog'

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Blog} />
          <Route path="/weather" component={WeatherPage} />
        </Switch>
      </div>
    );
  }
}
