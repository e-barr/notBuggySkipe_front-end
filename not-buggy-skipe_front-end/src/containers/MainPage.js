import React, { Component } from 'react'
import ProfileTile from './ProfileTile'
import MeetingRoomsTile from './MeetingRoomsTile'
import ContactsTile from './ContactsTile'
import MeetingRoomDisplayTile from './MeetingRoomDisplayTile'
import MeetingRoom from './MeetingRoom'
import EditProfile from './EditProfile'
import ViewUsersTile from './ViewUsersTile'

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
                        {this.props.editingProfile ? <EditProfile profileChangesConfirmed={this.props.profileChangesConfirmed} user={this.props.currentUser} /> : <ProfileTile user={this.props.currentUser} editUser={this.props.editUser} />}
                        <MeetingRoomsTile sentInvites={this.props.currentUser.sent_invites} receivedInvites={this.props.currentUser.received_invites} onSelectRoom={this.onSelectRoom} deleteInvite={this.props.deleteInvite} currentUserId={this.props.currentUser.id} />
                        <ContactsTile contacts={this.props.currentUser.contacts} removeContact={this.props.removeContact} viewUsers={this.props.viewUsers} />
                        {this.props.viewingUsers ? <ViewUsersTile allUsers={this.props.allUsers} user={this.props.currentUser} addContact={this.props.addContact} /> : null }
                        {this.state.selectedRoom ? <MeetingRoomDisplayTile selectedRoom={this.state.selectedRoom} addMeetingId={this.props.addMeetingId} meetingId={this.props.currentUser.meeting_id} leaveMeeting={this.props.leaveMeeting} /> : <div>Please select a meeting room to see further details.</div>}
                        {this.props.currentUser && this.props.currentUser.meeting_id ? <MeetingRoom room={this.props.currentUser.meeting_room} /> : null }
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