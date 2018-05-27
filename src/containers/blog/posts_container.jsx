import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, NavLink } from 'react-router-dom';

import { fetchPosts } from '../../actions/index'
import PostsNew from '../../components/blog/posts_new'

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        <h1>List of Blog Posts</h1>
        <NavLink
          to="/posts/new"
          activeClassName='active'
          >
          <button style={{margin: '15px 0'}} className="btn btn-primary">New Post</button>
          </NavLink>
          <Route exact path="/posts/new" component={PostsNew} />
        </div>
      );
    }
  }

  export default connect(null, { fetchPosts })(PostsIndex);
