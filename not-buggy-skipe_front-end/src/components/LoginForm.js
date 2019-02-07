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

    renderField = ({ input, label, meta, type }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} placeholder={label} type={type} />
                <div>{this.renderError(meta)}</div>
            </div>
        )
    }

    onSubmit = (formValues) => {
        console.log(`formValues is:`)
        console.log(formValues)
    }

    renderForm = () => {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field 
                    name="username"
                    label="username"
                    component={this.renderField}
                    type="text"
                />
                <Field 
                    name="password"
                    label="password"
                    component={this.renderField}
                    type="password"
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