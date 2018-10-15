import React, { Component } from 'react'

class LoginForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.login}>
                <input type="text" placeholder="username" name="username" onChange={this.handleChange} />
                <input type="password" placeholder="password" name="password" onChange={this.handleChange} />
                <input type="submit" />
            </form>
        )
    }
}

export default LoginForm