import React, { Component } from 'react';
import './App.css';
import LoginForm from './LoginForm'
import MainPage from './MainPage'

ROOT_URL = 'https://e-barr.github.io/notBuggySkipe_front-end'

class App extends Component {
  state = {
    username: '',
    password: '',
    currentUser: null,
    loginError: null,
    editingProfile: false,
    viewingUsers: false,
    allUsers: [],
    creatingInvite: false,
    senderId: null,
    receiverId: null,
    receiverName: null
  }

  sendInvite = (sender_id, receiver_id, content, room_name) => {
    fetch(`${ROOT_URL}/api/v1/invites`, {
      method: "POST",
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        invite: {
          sender_id,
          receiver_id,
          room_name,
          content
        }
      })
    })
    .then(resp => resp.json())
    .then(resp => this.setState({
      currentUser: resp.user
    }))

    this.setState({
      creatingInvite: false,
      senderId: null,
      receiverId: null
    })
  }

  createInvite = (sender_id, receiver_id, receiverName) => {
    this.setState({
      creatingInvite: true,
      senderId: sender_id,
      receiverId: receiver_id,
      receiverName
    })
  }

  closeInviteForm = () => {
    this.setState({
      creatingInvite: false
    })
  }

  deleteInvite = (id, user_id) => {
    fetch(`${ROOM_URL}/api/v1/invites`, {
      method: "DELETE",
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        invite: { id, user_id }
      })
    })
    .then(resp => resp.json())
    .then(resp => this.setState({
      currentUser: resp.user
    }))
    .then(resp => console.log(this.state.currentUser))
  }

  addContact = (user_1_id, user_2_id) => {
    fetch(`${ROOT_URL}/api/v1/contacts`, {
      method: "POST",
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        contact: {
          user_1_id,
          user_2_id
        }
      })
    })
    .then(resp => resp.json())
    .then(resp => this.setState({
      currentUser: resp.user
    }))
    .then(resp => console.log(this.state.currentUser))
  }

  viewUsers = () => {
    if (this.state.viewingUsers) {
      this.setState({
        viewingUsers: false
      })
    } else {

      this.setState({
        viewingUsers: true
      })

      fetch(`${ROOT_URL}/api/v1/users`, {
        method: "GET",
        headers: {
          'Content-Type' : 'application/json',
          'Authorization' : `Bearer ${localStorage.token}`
        }
      })
      .then(resp => resp.json())
      .then(resp => this.setState({
        allUsers: resp
      }))
    }
  }

  removeContact = id => {
      fetch(`${ROOT_URL}/api/v1/contacts`, {
      method: "DELETE",
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        contact: { id }
      })
    })
    .then(resp => resp.json())
    .then(resp => this.setState({
      currentUser: resp.user
    }))
    .then(resp => console.log(this.state.currentUser))
  }
  
  logout = event => {
    const currentUser = {...this.state.currentUser }
    
    fetch(`${ROOT_URL}/api/v1/profile`, {
      method: "PATCH",
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        user: {...currentUser, meeting_id: null }
      })
    })

    this.setState({
      editingProfile: false
    })
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

  closeEditProfile = () => {
    this.setState({
      editingProfile: false
    })
  }

  profileChangesConfirmed = ({ email, username, city, country, image_url, id }) => {
    const currentUser = {...this.state.currentUser, email, username, city, country, image_url }
    
    fetch(`${ROOT_URL}/api/v1/profile`, {
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

    fetch(`${ROOT_URL}/api/v1/profile`, {
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
        fetch(`${ROOT_URL}/api/v1/profile`, {
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
        fetch(`${ROOT_URL}/api/v1/profile`, {
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

    fetch(`${ROOT_URL}/api/v1/login`, {
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
            <MainPage currentUser={this.state.currentUser} logout={this.logout} addMeetingId={this.addMeetingId} leaveMeeting={this.leaveMeeting} editingProfile={this.state.editingProfile} closeEditProfile={this.closeEditProfile} editUser={this.editUser} profileChangesConfirmed={this.profileChangesConfirmed} removeContact={this.removeContact} viewUsers={this.viewUsers} allUsers={this.state.allUsers} viewingUsers={this.state.viewingUsers} addContact={this.addContact} deleteInvite={this.deleteInvite} creatingInvite={this.state.creatingInvite} createInvite={this.createInvite} closeInviteForm={this.closeInviteForm} setSenderIdReceiverId={this.setSenderIdReceiverId} senderId={this.state.senderId} receiverId={this.state.receiverId} sendInvite={this.sendInvite} receiverName={this.state.receiverName} />
        </div>
      );
    
  }
}

export default App;
