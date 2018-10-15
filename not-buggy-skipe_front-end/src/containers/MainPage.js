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
                        <ProfileTile />
                        <MeetingRoomsTile />
                        <ContactsTile />
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