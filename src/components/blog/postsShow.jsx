import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchPost, deletePost } from '../../actions/index';

class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object,
  }
  constructor(props) {
    super(props);
    this.onDeleteClick.bind(this);
  }
  componentWillMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.match.params.id)
      .then(() => {
        this.context.router.history.push('/posts;');
      });
  }

  render() {
    if (!this.props.post) {
      return <div>Loading...</div>;
    }
    const { post } = this.props;
    return (
      <div>
        <br />
        <Link to="/posts"><button className="btn btn-primary">Back</button></Link>
        <button
          className="btn btn-danger float-right"
          onClick={this.onDeleteClick}
        >
          Delete Post
        </button>
        <hr />
        <h2>{post.title}</h2>
        <h5>Categories: {post.categories}</h5>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
