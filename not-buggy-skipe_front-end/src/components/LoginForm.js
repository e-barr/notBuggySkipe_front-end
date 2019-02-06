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

import React from 'react'

const LoginForm = () => {
    return (
        <div className="ui raised padded text container segment">
        <h2>Login</h2>
            <form className="ui form">
            <div className="field">
                <label>username</label>
                <input type="text" name="username" placeholder="username"/>
            </div>
            <div className="field">
                <label>password</label>
                <input type="password" name="password" placeholder="password" />
            </div>
            
            <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LoginForm;