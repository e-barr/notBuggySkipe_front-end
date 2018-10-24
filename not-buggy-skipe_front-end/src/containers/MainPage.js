import React, { Component } from 'react'
import ProfileTile from './ProfileTile'
import MeetingRoomsTile from './MeetingRoomsTile'
import ContactsTile from './ContactsTile'
import MeetingRoomDisplayTile from './MeetingRoomDisplayTile'
import MeetingRoom from './MeetingRoom'
import EditProfile from './EditProfile'
import ViewUsersTile from './ViewUsersTile'
import InviteForm from './InviteForm'

class MainPage extends Component {
    state = {
        selectedRoom: null
    }

    onSelectRoom = (room) => {
        this.setState({
            selectedRoom: room
        })
    }

    render() {
        if (this.props.currentUser) {
            return (
               <div>

                    <div id="wrapper">
                        <div id="three-column" className="container">
                            <div className="title">
                                {this.props.editingProfile ? <EditProfile profileChangesConfirmed={this.props.profileChangesConfirmed} user={this.props.currentUser} closeEditProfile={this.props.closeEditProfile} /> : <ProfileTile user={this.props.currentUser} editUser={this.props.editUser} logout={this.props.logout} />}
                            </div>
                            <div className="boxA">
                                <MeetingRoomsTile sentInvites={this.props.currentUser.sent_invites} receivedInvites={this.props.currentUser.received_invites} onSelectRoom={this.onSelectRoom} deleteInvite={this.props.deleteInvite} currentUserId={this.props.currentUser.id} />
                            </div>
                            <div className="boxB">
                                {this.props.creatingInvite ? <InviteForm closeInviteForm={this.props.closeInviteForm} senderId={this.props.senderId} receiverId={this.props.receiverId} sendInvite={this.props.sendInvite} receiverName={this.props.receiverName} /> : <ContactsTile contacts={this.props.currentUser.contacts} removeContact={this.props.removeContact} viewUsers={this.props.viewUsers} createInvite={this.props.createInvite} currentUserId={this.props.currentUser.id} />}
                            </div>
                            <div className="boxC">
                                {this.props.viewingUsers ? <ViewUsersTile allUsers={this.props.allUsers} user={this.props.currentUser} addContact={this.props.addContact} /> : null }
                            </div>
                        </div>
                                <div id="welcome">
                                    {this.state.selectedRoom ? <MeetingRoomDisplayTile selectedRoom={this.state.selectedRoom} addMeetingId={this.props.addMeetingId} meetingId={this.props.currentUser.meeting_id} leaveMeeting={this.props.leaveMeeting} /> : <div>Please select a meeting room to see further details.</div>}
                                    <div className="container">
                                        {this.props.currentUser && this.props.currentUser.meeting_id ? <MeetingRoom style={ {height:"100px"}} room={this.props.currentUser.meeting_room} /> : null }
                                    </div>
                                </div>
                    </div>
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