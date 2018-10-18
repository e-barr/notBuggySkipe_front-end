import React, { Component } from 'react';
import './App.css';
import LoginForm from './LoginForm'
import MainPage from './MainPage'

class App extends Component {
  state = {
    username: '',
    password: '',
    currentUser: null,
    loginError: null,
    editingProfile: false
  }
  
  logout = event => {
    this.setState({
      username: '',
      password: '',
      currentUser: null,
      loginError: null,
      editingProfile: false
    })

    this.props.history.push('/login')
    localStorage.clear()
  }

  editUser = event => {
    event.preventDefault()
    this.setState({
      editingProfile: true
    })
  }

  profileChangesConfirmed = ({ email, username, city, country, image_url, id }) => {
    const currentUser = {...this.state.currentUser, email, username, city, country, image_url }
    
    fetch('http://localhost:3000/api/v1/profile', {
      method: "PATCH",
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        user: {...currentUser, id: currentUser.id }
      })
    })
    .then(resp => resp.json())
    .then(resp => this.setState({
      currentUser: resp.user
    }))
    .then(resp => console.log(this.state.currentUser))

    this.setState({
      editingProfile: false
    })
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
    if (this.state.currentUser.meeting_id) {
      alert('You may only be in one meeting at a time. Please exit your current meeting before joining another one.')
      return;
    }
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
      .then(resp => this.setState({
        currentUser: resp.user
      }))
      .then(resp => console.log(this.state.currentUser))

    })
  }


  leaveMeeting = () => {
    if (!this.state.currentUser.meeting_id) {
      alert('You are currently not in a meeting. Please join a group to leave.')
      return;
    }

    const currentUser = {...this.state.currentUser, meeting_id: null }
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
      .then(resp => this.setState({
        currentUser: resp.user
      }))
      .then(console.log(`${this.state.currentUser.username} has left`, this.state.currentUser))

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
            <MainPage currentUser={this.state.currentUser} logout={this.logout} addMeetingId={this.addMeetingId} leaveMeeting={this.leaveMeeting} editingProfile={this.state.editingProfile} editUser={this.editUser} profileChangesConfirmed={this.profileChangesConfirmed} />
        </div>
      );
    
  }
}

export default App;
