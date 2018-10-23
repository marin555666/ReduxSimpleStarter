import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input 
          className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.error}
      </div>
    )
  }

  onSubmit(values) {
    console.log(values)
  }

  render() {
    const { handleSubmit } = this.props
    
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field 
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field 
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field 
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link className="btn btn-primary" to="/">
            Cancel
        </Link>
      </form>
    )
  }
}

function validate(values) {
  const errors = {}
   // validate inputs from values
  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title that is at least 3 characters!!"
  }
  if (!values.categories) {
    errors.categories = "Enter some categories!!"
  }
  if (!values.content) {
    errors.content = "Enter some content!!"
  }
   // if errors is empty the form is fine to submit
  return errors
}

export default reduxForm({
  validate, // validate: validate
  form: 'PostsNewForm'
})(PostsNew)