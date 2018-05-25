import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'

import WeatherPage from './weather/weatherpage';
import Blog from './blog/blog';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
              <LinkContainer
                to="/weather"
                activeClassName='active'
                >
                  <Button>
                    Weather
                  </Button>
                </LinkContainer>
                <IndexLinkContainer
                  to="/"
                  activeClassName='active'
                  >
                    <Button>
                      Blog
                    </Button>
                  </IndexLinkContainer>
                </div>
              </Navbar>
            </header>
            <Switch>
              <Route exact path="/" component={Blog} />
              <Route path="/weather" component={WeatherPage} />
            </Switch>
          </div>
        );
      }
    }
