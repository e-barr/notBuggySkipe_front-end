import React, { Component } from 'react'

class LoginForm extends Component {
    render() {
        const { login, handleChange } = this.props
        return (
            <div className="inner-content">
                <h2>Login</h2>
                    <form onSubmit={login}>
                        <p><input type="text" placeholder="username" name="username" onChange={handleChange} /></p>
                        <p><input type="password" placeholder="password" name="password" onChange={handleChange} /></p>
                        <button className="button button-alt intro-button">Login</button>
                    </form>
            </div>
        )
    }
}

export default LoginForm