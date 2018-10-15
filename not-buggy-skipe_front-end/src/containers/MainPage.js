import React, { Component } from 'react'
import ProfileTile from './ProfileTile'
import MeetingRoomsTile from './MeetingRoomsTile'
import ContactsTile from './ContactsTile'
import MeetingRoomDisplayTile from './MeetingRoomDisplayTile'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class MainPage extends Component {
    render() {
        if (this.props.currentUser) {
            return (
                <div>
                    <h1>Welcome, {this.props.currentUser.username}!</h1>
                        <ProfileTile user={this.props.currentUser}/>
                        <MeetingRoomsTile sentInvites={this.props.currentUser.sent_invites} receivedInvites={this.props.currentUser.received_invites} />
                        <ContactsTile contacts={this.props.currentUser.contacts} />
                        <MeetingRoomDisplayTile />
                </div>
            )
        } else {
            return (
            <div>LOADING ****'S INFORMATION !!!!</div>
            )
        }
    }
}

export default MainPage