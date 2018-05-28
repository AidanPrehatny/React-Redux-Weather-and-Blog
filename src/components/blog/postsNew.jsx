import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { createPost } from '../../actions/index';

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  } else if (values.title.length < 5) {
    errors.title = 'Must be 5 characters or more';
  }
  if (!values.categories) {
    errors.categories = 'Required';
  }
  if (!values.content) {
    errors.content = 'Required';
  } else if (values.content.length < 5) {
    errors.content = 'Must be 5 characters or more';
  }
  return errors;
};

const renderField = ({
  input, label, type, meta: { touched, error },
}) => (
  <div className={`form-group ${touched && error ? 'has-danger' : ''}`}>
    <label>
      <h4>{label}</h4>
    </label>
    <input className={`form-control ${touched && error ? 'is-invalid' : ''}`} {...input} placeholder={label} type={type} />
    {touched && (error && <strong style={{ color: 'red' }}>{error}</strong>)}
    <br />
  </div>
);

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
      // blog post has been created, navigate user to the index
      // we navigate by calling this.context.router.history.push
        this.context.router.history.push('/');
      });
  }

  render() {
    const {
      handleSubmit, pristine, reset, submitting,
    }
    = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field name="title" type="text" component={renderField} label="Title" />
        <Field name="categories" type="text" component={renderField} label="Categories" />
        <Field name="content" type="text" component={renderField} label="Content" />
        <div>
          <button style={{ marginRight: '10px' }} type="submit" disabled={submitting} className="btn btn-primary">Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-secondary">Clear Values</button>
        </div>
      </form>
    );
  }
}

export default connect(null, { createPost })(reduxForm({
  form: 'PostsNewForm',
  validate,
})(PostsNew));

// PostsNew = reduxForm({
//   form: 'PostsNewForm',
//   validate
// })(PostsNew)
//
// export default connect(null, { createPost })(PostsNew)
