import React, { Component } from 'react'

class MeetingRoomsTile extends Component {
    render () {
        const allInvites = this.props.sentInvites.concat(this.props.receivedInvites)
        return (
            <div className="meeting-rooms-tile">
                MEETING ROOM TILE!
                {allInvites.map(invite => <li key={invite.id}>sent by:{invite.sender.username} received by: {invite.receiver.username} room:{invite.room.name} <button onClick={() => this.props.onSelectRoom(invite.room)}>SELECT</button></li>)}
            </div>
        )
    }
}

export default MeetingRoomsTile