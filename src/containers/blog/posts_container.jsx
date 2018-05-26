import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

import { fetchPosts } from '../../actions/index'


class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        <h1>List of Blog Posts</h1>
        <LinkContainer
          exact={true}
          to="/posts/new"
          activeClassName='active'
          >
            <Button>
              New Post
            </Button>
          </LinkContainer>
          <div>

          </div>
        </div>
      );
    }
  }


  export default connect(null, { fetchPosts })(PostsIndex);
