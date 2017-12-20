import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Form, Input, Message } from 'semantic-ui-react';

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  
  semanticFormField({ input, type, label, placeholder, meta: { touched, error, warning }, as: As = Input, ...props }) {
    function handleChange (e, { value }) {
      return input.onChange(value);
    }
    return (
      <Form.Field>
        <As  {...props} {...input} value={input.value} type={type} label={label} placeholder={placeholder} onChange={handleChange} />
        {touched ?
            <Message
            error
            header='Missing content'
            content={error}
            /> : ''
        }
      </Form.Field>
    );
  }

  onSubmit() {

  }

  render() {
    return (
      <Form error>
        <Form.Group widths='equal'>
         <Field name='firstName' label='First Name' component={this.semanticFormField} as={Form.Input} type='text' />
         <Field name='email' label='Email' component={this.semanticFormField} as={Form.Input} type='email' />
        </Form.Group>
        <Field name='body' label='Say Hi' component={this.semanticFormField} as='textarea' type='text' />
      </Form>
    )
  }
}

function validateForm() {

}

export default reduxForm({
  form: 'contact'
})(ContactForm);