import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'

import WeatherPage from './weather/weatherpage';
import PostsIndex from '../containers/blog/posts_container';
import PostsNew from './blog/posts_new'
import Home from './home/home'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
              <IndexLinkContainer
                to="/"
                activeClassName='active'
                >
                  <Button>
                    Home
                  </Button>
                </IndexLinkContainer>
                <LinkContainer
                  to="/posts"
                  activeClassName='active'
                  >
                    <Button>
                      Blog
                    </Button>
                  </LinkContainer>
                  <LinkContainer
                    to="/weather"
                    activeClassName='active'
                    >
                      <Button>
                        Weather
                      </Button>
                    </LinkContainer>
                  </div>
                </Navbar>
              </header>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/weather" component={WeatherPage} />
                <PostsIndex>
                  <Route path="/posts/new" component={PostsNew} />
                </PostsIndex>
              </Switch>
            </div>
          );
        }
      }
