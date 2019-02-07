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

import { login } from '../actions'

class LoginForm extends Component {
    renderError({ error, touched }) {
        if (error && touched) {
            return (
                <div className="ui error" >
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta,placeholder }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} placeholder={placeholder} onChange={this.handleInputChange} />
                <div>{this.renderError(meta)}</div>
            </div>
        )
    }

    onSubmit = (formValues) => {
        console.log(`formValues is:`)
        console.log(formValues)
    }

    render() {
        return (
            <div className="ui raised padded text container segment">
            <h2>Login</h2>
                <form className="ui form error">
                <Field 
                    name="username"
                    label="username"
                    placeholder="username"
                    component={this.renderInput}
                />
                <Field 
                    name="password"
                    label="password"
                    placeholder="password"
                    component={this.renderInput}
                />
                <button 
                    className="ui button"
                    type="submit"
                    onSubmit={this.onSubmit}
                >
                    Submit
                </button>
                </form>
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
    form: 'login',
    validate
})(LoginForm);

export default connect(null, { login })(formWrapped);