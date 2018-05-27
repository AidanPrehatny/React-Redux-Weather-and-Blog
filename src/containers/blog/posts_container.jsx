import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

import { fetchPosts } from '../../actions/index'


class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }


  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={"/posts/" + post.id} >
          <span className="float-right">{post.categories}</span>
          <strong>{post.title}</strong>
        </Link>
      </li>
    )
  })
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
        <br></br>
        <hr></hr>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
