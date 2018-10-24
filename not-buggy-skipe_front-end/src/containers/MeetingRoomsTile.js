import React, { Component } from 'react'

class MeetingRoomsTile extends Component {
    render () {
        return (
            <div className="meeting-rooms-tile">
                <div>
                    <h4>Inbox</h4>
                    {this.props.receivedInvites.length > 0 ? <div>{this.props.receivedInvites.map(invite => <p key={invite.id}>from: <strong>{invite.sender.username}</strong> room: <strong>{invite.room.name}</strong><button onClick={() => this.props.onSelectRoom(invite.room)}>DETAILS</button><button onClick={() => this.props.deleteInvite(invite.id, this.props.currentUserId)}>DELETE</button></p>)}.</div> : <div>You have not received any invites.</div>}
                </div>
                <div>
                    <h4>Sent</h4>
                    {this.props.sentInvites.length > 0 ? <div>{this.props.sentInvites.map(invite => <p key={invite.id}><strong>to: {invite.receiver.username}</strong> room: <strong>{invite.room.name}</strong><button onClick={() => this.props.onSelectRoom(invite.room)}>DETAILS</button><button onClick={() => this.props.deleteInvite(invite.id, this.props.currentUserId)}>DELETE</button></p>)}</div> : <div>You have not sent any invites.</div>}
                </div>
                
                {/* {allInvites.length > 0 ? allInvites.map(invite => <p key={invite.id}>FROM:<strong>{invite.sender.username}</strong> TO:<strong>{invite.receiver.username}</strong> room:{invite.room.name} <button onClick={() => this.props.onSelectRoom(invite.room)}>DETAILS</button><button onClick={() => this.props.deleteInvite(invite.id, this.props.currentUserId)}>DELETE</button></p>) : <p>You currently have no invites.</p>} */}
            </div>
        )
    }
}

export default MeetingRoomsTile