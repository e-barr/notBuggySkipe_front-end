import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import { renderField } from './Utils'
import { signUp } from '../actions'

class SignUpForm extends Component {
    onSubmit = (formValues) => {
        this.props.signUp(formValues)
    }

    renderForm = () => {
        return (
            <form
            className="ui form error"
            onSubmit={this.props.handleSubmit(this.onSubmit)}>

                <Field
                    name="email"
                    label="email"
                    component={renderField}
                    type="text"
                />
                <Field
                    name="username"
                    label="username"
                    component={renderField}
                    type="text"
                />
                <Field
                    name="password"
                    label="password"
                    component={renderField}
                    type="password"
                />
                <Field
                    name="confirmPassword"
                    label="confirm password"
                    component={renderField}
                    type="password"
                />
                <Field
                    name="city"
                    label="city"
                    component={renderField}
                    type="text"
                />
                <Field
                    name="country"
                    label="country"
                    component={renderField}
                    type="text"
                />
                <Field
                    name="image_url"
                    label="image url"
                    component={renderField}
                    type="text"
                />

                <button
                    className="ui button"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        )
    }

    render() {
        return (
            <div className="ui raised padded text container segment">
                <h1>Sign Up</h1>
                {this.renderForm()}
            </div>
        )
    }
}

const validate = ({ email, username, password, confirmPassword, city, country, image_url }) => {
    const errors = {}

    if (!email) {
        errors.email = 'You must enter an email'
    }

    if (!username) {
        errors.username = 'You must enter a username'
    }

    if (!password) {
        errors.password = 'You must enter a password'
    }

    if (password !== confirmPassword) {
        errors.confirmPassword = 'Your passwords do not match'
    }

    if (!city) {
        errors.city = 'You must enter a city'
    }

    if (!country) {
        errors.country = 'You must enter a country'
    }

    if (!image_url) {
        errors[image_url] = 'You must enter an image url.'
    }

    return errors
}

const formWrapped = reduxForm({
    form: 'signUpForm',
    validate
})(SignUpForm);

export default connect(null, { signUp })(formWrapped);