import React, { Component } from 'react'

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
            fetch('http://localhost:3000/api/v1/users', {
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
            <div>
                <h2>Sign Up</h2>
                    <form onSubmit={(event) => this.onSubmitSignUpForm(event, this.state)}>
                        <p>Email: <input type="text" name="email" onChange={this.onChangeInput}/></p>
                        <p>Username: <input type="text" name="username" onChange={this.onChangeInput} /></p>
                        <p>Password: <input type="password" name="password" onChange={this.onChangeInput} /></p>
                        <p>Confirm password: <input type="password" name="confirmPassword" onChange={this.onChangeInput} /></p>
                        <p>City: <input type="text" name="city" onChange={this.onChangeInput} /></p>
                        <p>Country: <input type="text" name="country" onChange={this.onChangeInput} /></p>
                        <p>Image URL: <input type="text" name="image_url" onChange={this.onChangeInput} /></p>
        
                        <button>Continue</button>
                    </form>
            </div>

        )
    }
}

export default SignUpForm