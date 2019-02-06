// import React, { Component } from 'react'

// const ROOT_URL = 'https://not-buggy-skipe.herokuapp.com'
// class SignUpForm extends Component {
//     state = {
//         email: '',
//         username: '',
//         password: '',
//         confirmPassword: '',
//         city: '',
//         country: '',
//         image_url: ''
//     }

//     onChangeInput = event => {
//         this.setState({
//             [event.target.name] : event.target.value
//         })
//     }

//     onSubmitSignUpForm = (event, state) => {
//         event.preventDefault()
//         if (state.password === state.confirmPassword) {
//             fetch(`${ROOT_URL}/api/v1/users`, {
//                 method: "POST",
//                 body: JSON.stringify({
//                     user: {
//                         email: state.email,
//                         username: state.username,
//                         password: state.password,
//                         city: state.city,
//                         country: state.country,
//                         image_url: state.image_url
//                     }
//                 }),
//                 headers: {
//                     'Content-Type' : 'application/json'
//                 }
//             })
//             .then(resp => resp.json())
//             .then(data => {
//                 if (!data.error) {
//                     alert('Your account has successfully been created! You will now be redirected to the login page.')
//                     this.props.history.push("/")
//                 } else {
//                     alert(data.error)
//                 }
//             })
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h2>Sign Up</h2>
//                 <div>

//                     <form onSubmit={(event) => this.onSubmitSignUpForm(event, this.state)}>
//                         <p><input type="text" name="email" onChange={this.onChangeInput} placeholder="email"/></p>
//                         <p><input type="text" name="username" onChange={this.onChangeInput} placeholder="username"/></p>
//                         <p><input type="password" name="password" onChange={this.onChangeInput} placeholder="password"/></p>
//                         <p><input type="password" name="confirmPassword" onChange={this.onChangeInput} placeholder="confirm password"/></p>
//                         <p><input type="text" name="city" onChange={this.onChangeInput} placeholder="city"/></p>
//                         <p><input type="text" name="country" onChange={this.onChangeInput} placeholder="country"/></p>
//                         <p><input type="text" name="image_url" onChange={this.onChangeInput} placeholder="image url"/></p>
        
//                         <button>Continue</button>
//                     </form>
//                 </div>
//             </div>

//         )
//     }
// }

// export default SignUpForm

import React from 'react'

const SignUpForm = () => {
    return (
        <div className="ui raised padded text container segment">
        <h1>Sign Up</h1>

        <form className="ui form">
            <div className="field">
                <label>email</label>
                <input type="text" name="email" placeholder="email"/>
            </div>
            <div className="field">
                <label>password</label>
                <input type="password" name="password" placeholder="password" />
            </div>
            <div className="field">
                <label>confirm password</label>
                <input type="password" name="confirmPassword" placeholder="confirm password" />
            </div>
            <div className="field">
                <label>city</label>
                <input type="text" name="city" placeholder="city" />
            </div>
            <div className="field">
                <label>country</label>
                <input type="text" name="country" placeholder="country" />
            </div>
            <div className="field">
                <label>image url (required)</label>
                <input type="text" name="imageUrl" placeholder="image url" />
            </div>

            <button className="ui button" type="submit">Submit</button>
        </form>
        </div>
    )
}

// confirm password
// city
// country
// image_url

export default SignUpForm;