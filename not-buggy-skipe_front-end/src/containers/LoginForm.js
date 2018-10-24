import React, { Component } from 'react'

class LoginForm extends Component {
    render() {
        const { login, handleChange } = this.props
        return (
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={login}>
                    <input type="text" placeholder="username" name="username" onChange={handleChange} />
                    <input type="password" placeholder="password" name="password" onChange={handleChange} />
                    <button className="button button-alt intro-button">Login</button>
                </form>
            </div>
        )
    }
}

export default LoginForm