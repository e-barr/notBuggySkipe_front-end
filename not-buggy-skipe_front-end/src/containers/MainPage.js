import React, { Component } from 'react'
import ProfileTile from './ProfileTile'
import MeetingRoomsTile from './MeetingRoomsTile'
import ContactsTile from './ContactsTile'
import MeetingRoomDisplayTile from './MeetingRoomDisplayTile'
// import { BrowserRouter as Router, Route } from 'react-router-dom'

class MainPage extends Component {
    state = {
        selectedRoom: null
    }

    onSelectRoom = room => {
        this.setState({
            selectedRoom: room
        })
    }

    render() {
        if (this.props.currentUser) {
            return (
                <div>
                    <h1>Welcome, {this.props.currentUser.username}!</h1>
                    <button onClick={this.props.logout}>Logout</button>
                        <ProfileTile user={this.props.currentUser}/>
                        <MeetingRoomsTile sentInvites={this.props.currentUser.sent_invites} receivedInvites={this.props.currentUser.received_invites} onSelectRoom={this.onSelectRoom} />
                        <ContactsTile contacts={this.props.currentUser.contacts} />
                        {this.state.selectedRoom !== null ? <MeetingRoomDisplayTile selectedRoom={this.state.selectedRoom} addMeetingId={this.props.addMeetingId} /> : <div>Please select a meeting room to see further details.</div>}
                </div>
            )
        } else {
            return (
            <div>Hi</div>
            )
        }
    }
}

export default MainPage