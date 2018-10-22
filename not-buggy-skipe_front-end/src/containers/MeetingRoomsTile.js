import React, { Component } from 'react'

class MeetingRoomsTile extends Component {
    render () {
        const allInvites = this.props.sentInvites.concat(this.props.receivedInvites)
        return (
            <div className="meeting-rooms-tile">
                INVITES
                
                {allInvites.length > 0 ? allInvites.map(invite => <li key={invite.id}>sent by:{invite.sender.username} received by: {invite.receiver.username} room:{invite.room.name} <button onClick={() => this.props.onSelectRoom(invite.room)}>SELECT</button><button onClick={() => this.props.deleteInvite(invite.id, this.props.currentUserId)}>DELETE</button></li>) : <p>You currently have no invites.</p>}
            </div>
        )
    }
}

export default MeetingRoomsTile