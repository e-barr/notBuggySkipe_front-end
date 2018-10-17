import React, { Component } from 'react';
import './App.css';
import LoginForm from './LoginForm'
import MainPage from './MainPage'

class App extends Component {
  state = {
    username: '',
    password: '',
    currentUser: null,
    loginError: null
  }
  
  logout = event => {
    this.setState({
      username: '',
      password: '',
      currentUser: null,
      loginError: null
    })

    this.props.history.push('/login')
    localStorage.clear()
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

  addMeetingId = meeting_id => {
    debugger;
    const currentUser = {...this.state.currentUser, meeting_id }
    this.setState({ currentUser }, () => {
        fetch('http://localhost:3000/api/v1/profile', {
        method: "PATCH",
        headers: {
          'Content-Type' : 'application/json',
          'Authorization' : `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
          user: { ...currentUser, id: currentUser.id }
         })
        }
      )
      .then(resp => resp.json())
      .then(resp => console.log(resp))

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
    if (!this.state.currentUser) {
      return (
        <LoginForm login={this.login} handleChange={this.handleChange} />
      )
    } 
      return (
        <div>
            <MainPage currentUser={this.state.currentUser} logout={this.logout} addMeetingId={this.addMeetingId} />
        </div>
      );
    
  }
}

export default App;
