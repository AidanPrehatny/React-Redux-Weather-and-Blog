import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions/index';

class PostsShow extends Component {

  componentWillMount() {
    this.props.fetchPost(this.props.match.params.id)
  }

  render() {
    if (!this.props.post ) {
      return <div>Loading...</div>
    }
    const { post } = this.props
    return (
      <div>
        <br></br>
        <hr></hr>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow)
