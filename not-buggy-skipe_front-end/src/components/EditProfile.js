import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import { renderField } from './Utils'
import { submitProfileChanges, isEditingProfile } from '../actions'


class EditProfile extends Component {
    onSubmit = (formValues) => {
        const { currentUser } = this.props
        this.props.submitProfileChanges(currentUser, formValues)
    }

    renderForm = ({ email, username, city, country, image_url }) => {
        return(
            <div>
                <form
                    className="ui form error"
                    onSubmit={this.props.handleSubmit(this.onSubmit)}
                >

                    <Field
                        name="email"
                        label="email"
                        component={renderField}
                        value={email}
                    />

                    <Field 
                        name="username"
                        label="username"
                        component={renderField}
                        value={username}
                    />

                    <Field 
                        name="city"
                        label="city"
                        component={renderField}
                        value={city}
                    />

                    <Field 
                        name="country"
                        label="country"
                        component={renderField}
                        value={country}
                    />

                    <Field
                        name="image_url"
                        label="image url"
                        component={renderField}
                        value={image_url}
                    />

                    <button
                        className="ui green button"
                        type="submit"
                    >
                        Submit
                    </button>


                    <button
                        className="ui right floated button"
                        onClick={this.props.isEditingProfile}
                    >
                        Cancel

                    </button>
                </form>

            </div>
        )
    }

    render() {
        const { currentUser } = this.props
            return(
                <div className="ui raised padded text container segment">
                    <h1>Profile</h1>
                    {this.renderForm(currentUser)}
                </div>
            )
        }
}

const validate = ({ email, username, city, country, image_url }) => {
    const errors = {}

    if (!email) {
        errors.email = 'You must enter an email'
    }

    if (!username) {
        errors.username = 'You must enter a username'
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
    form: 'editProfileForm',
    validate
})(EditProfile);

const mapStateToProps = (state) => {
    return {
        currentUser: state.auth.currentUser,
        initialValues: state.auth.currentUser
    }
}

export default connect(mapStateToProps, { submitProfileChanges, isEditingProfile })(formWrapped);