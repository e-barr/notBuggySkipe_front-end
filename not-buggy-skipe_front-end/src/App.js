import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    username: '',
    password: '',
    currentUser: null,
    loginError: null
  }

  componentDidMount() {
    const token = localStorage.token

    fetch('http://localhost:3000/profile', {
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
      <div className="App">
      {this.state.currentUser ? <h1>Hello {this.state.currentUser.username}</h1> : null}
        <header className="App-header">
          <form onSubmit={this.login}>
            <input type="text" placeholder="username" name="username" onChange={this.handleChange} />
            <input type="password" placeholder="password" name="password" onChange={this.handleChange} />
            <input type="submit" />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
