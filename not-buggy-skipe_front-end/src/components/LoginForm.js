// import React, { Component } from 'react'

// class LoginForm extends Component {
//     render() {
//         const { login, handleChange } = this.props
//         return (
//             <div>
//                 <h2>Login</h2>
//                     <form onSubmit={login}>
//                         <p><input type="text" placeholder="username" name="username" onChange={handleChange} /></p>
//                         <p><input type="password" placeholder="password" name="password" onChange={handleChange} /></p>
//                         <button className="button button-alt intro-button">Login</button>
//                     </form>
//             </div>
//         )
//     }
// }

// export default LoginForm

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { renderField } from './Utils'


import { login } from '../actions'

class LoginForm extends Component {
    onSubmit = (formValues) => {
        this.props.login(formValues)
    }

    renderForm = () => {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
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
                <button 
                    className="ui green button"
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
            <h2>Login</h2>
                {this.renderForm()}
            </div>
        )
    }
}

const validate = (formValues) => {
    const errors = {}

    if (!formValues.username) {
        errors.username = 'You must enter a username'
    }

    if (!formValues.password) {
        errors.password = 'You must enter a password'
    }

    return errors
}

const formWrapped = reduxForm({
    form: 'loginForm',
    validate
})(LoginForm);

export default connect(null, { login })(formWrapped);