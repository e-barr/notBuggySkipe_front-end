import React, { Component } from 'react'

class MeetingRoomDisplayTile extends Component {
    render() {
        return (
            <div className="meeting-room-display-tile">
                <p>Room Name: {this.props.selectedRoom.name}</p>
                <button onClick={() => this.props.addMeetingId(this.props.selectedRoom.id)}>JOIN</button>
            </div>
        )
    }
}

export default MeetingRoomDisplayTile