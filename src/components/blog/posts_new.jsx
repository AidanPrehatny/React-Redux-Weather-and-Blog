import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import { createPost } from '../../actions/index';


const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <input className="form-control" {...input} placeholder={label} type={type}/>
    </div>
  </div>
)

const PostsNew = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props

  return (
    <form onSubmit={handleSubmit(props.createPost)} >
      <Field name="title" type="text" component={renderField} label="Title"/>
      <Field name="categories" type="text" component={renderField} label="Categories"/>
      <Field name="content" type="text" component={renderField} label="Content"/>
      <div>
        <button type="submit" disabled={submitting} className="btn btn-primary">Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-secondary">Clear Values</button>
      </div>
    </form>
  )
}


export default connect(null, { createPost })(reduxForm({
  form: 'PostsNewForm'
})(PostsNew));
