import React, { Component } from 'react'

class MeetingRoomDisplayTile extends Component {
    render() {
        return (
            <div className="meeting-room-display-tile">
                <p>Room Name: {this.props.selectedRoom.name}</p>
                <p>Current room count: {this.props.selectedRoom.person_count}</p>
            </div>
        )
    }
}

export default MeetingRoomDisplayTile