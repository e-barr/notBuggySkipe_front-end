import React, { Component } from 'react'

class LoginForm extends Component {
    render() {
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.props.login}>
                    <input type="text" placeholder="username" name="username" onChange={this.props.handleChange} />
                    <input type="password" placeholder="password" name="password" onChange={this.props.handleChange} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default LoginForm