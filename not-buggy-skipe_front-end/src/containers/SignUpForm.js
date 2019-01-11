import React, { Component } from 'react'

const ROOT_URL = 'https://not-buggy-skipe.herokuapp.com'
class SignUpForm extends Component {
    state = {
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        city: '',
        country: '',
        image_url: ''
    }

    onChangeInput = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    onSubmitSignUpForm = (event, state) => {
        event.preventDefault()
        if (state.password === state.confirmPassword) {
            fetch(`${ROOT_URL}/api/v1/users`, {
                method: "POST",
                body: JSON.stringify({
                    user: {
                        email: state.email,
                        username: state.username,
                        password: state.password,
                        city: state.city,
                        country: state.country,
                        image_url: state.image_url
                    }
                }),
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            .then(resp => resp.json())
            .then(data => {
                if (!data.error) {
                    alert('Your account has successfully been created! You will now be redirected to the login page.')
                    this.props.history.push("/")
                } else {
                    alert(data.error)
                }
            })
        }
    }
    render() {
        return (
            <div className="inner-content">
                <h2>Sign Up</h2>
                <div>

                    <form onSubmit={(event) => this.onSubmitSignUpForm(event, this.state)}>
                        <p><input type="text" name="email" onChange={this.onChangeInput} placeholder="email"/></p>
                        <p><input type="text" name="username" onChange={this.onChangeInput} placeholder="username"/></p>
                        <p><input type="password" name="password" onChange={this.onChangeInput} placeholder="password"/></p>
                        <p><input type="password" name="confirmPassword" onChange={this.onChangeInput} placeholder="confirm password"/></p>
                        <p><input type="text" name="city" onChange={this.onChangeInput} placeholder="city"/></p>
                        <p><input type="text" name="country" onChange={this.onChangeInput} placeholder="country"/></p>
                        <p><input type="text" name="image_url" onChange={this.onChangeInput} placeholder="image url"/></p>
        
                        <button className="button button-alt intro-button">Continue</button>
                    </form>
                </div>
            </div>

        )
    }
}

export default SignUpForm