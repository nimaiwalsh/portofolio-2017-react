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
        {touched && error ?
          <Message
            error
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
      <Form error size='large'>
        <Form.Group widths='equal'>
         <Field name='name' label='First Name' component={this.semanticFormField} as={Form.Input} type='text' />
         <Field name='email' label='Email' component={this.semanticFormField} as={Form.Input} type='email' />
        </Form.Group>
        <Field name='message' label='Message' component={this.semanticFormField} as={Form.TextArea} type='text' />
      </Form>
    )
  }
}
//Function called automatically by Redux-Form when user attempts to submit
function validate(values) {
  const errors = {}
  if (!values.name) {
    errors.name = 'Hi Anonymous, please provide a name so I can greet you correctly.';
  }
  if (!values.email) {
    errors.email = 'Where can I send you a reply?'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'A valid email adress would be nice =)'
  }
  if (!values.message || values.message < 5) {
    errors.message = `I'd love to help, but unfortunately I can't read minds. A message would be great`
  }
  //If errors is empty, the form is fine to submit
  //If errors has *any* properties, redux assumes form is invalid 
  return errors;
}

export default reduxForm({
  form: 'contact',
  validate
})(ContactForm);