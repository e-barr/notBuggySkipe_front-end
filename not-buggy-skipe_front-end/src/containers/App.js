import React, { Component } from 'react';
import './App.css';
import LoginForm from './LoginForm'
import Header from './Header'
import MainPage from './MainPage'

class App extends Component {
  state = {
    username: '',
    password: '',
    currentUser: null,
    loginError: null
  }

  componentDidMount() {
    const token = localStorage.token

    fetch('http://localhost:3000/api/v1/profile', {
      method: "GET",
      headers: {
        'Authorization' : `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(data => {
      if (!data.error) {
        this.setState({
          currentUser: data.user
        })
      }
    })
  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value 
    })
  }

  login = event => {
    event.preventDefault()

    fetch('http://localhost:3000/api/v1/login', {
      method: "POST",
      body: JSON.stringify({
        user: {
          username: this.state.username,
          password: this.state.password
        }
      }),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        if (!data.error) {
          localStorage.token = data.jwt
          this.setState({
            currentUser: data.user
          })
        } else {
          this.setState({
            loginError: data.error
          })
        }
      })
  }

  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <div>
          {this.state.currentUser !== null ? <MainPage currentUser={this.state.currentUser} /> : <LoginForm login={this.login} /> }
        </div>
      </div>
    );
  }
}

export default App;
