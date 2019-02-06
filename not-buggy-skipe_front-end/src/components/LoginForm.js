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

import { login } from '../actions'

class LoginForm extends Component {
    state = {
        username: '',
        password: ''
    }

    handleInputChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div className="ui raised padded text container segment">
            <h2>Login</h2>
                <form className="ui form">
                <div className="field">
                    <label>username</label>
                    <input 
                        type="text"
                        name="username"
                        placeholder="username"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="field">
                    <label>password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={this.handleInputChange}
                    />
                </div>
                
                <button 
                    className="ui button"
                    type="submit"
                    onSubmit={(event) => this.login(event, { user: {...this.state}})}
                >
                    Submit
                </button>
                </form>
            </div>
        )
    }
}

export default connect(null, { login })(LoginForm);