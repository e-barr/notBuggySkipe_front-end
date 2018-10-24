import React, { Component } from 'react'

class MeetingRoomDisplayTile extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="meeting-room-display-tile">
                <p>Room Name: {this.props.selectedRoom.name}</p>
                {this.props.meetingId === this.props.selectedRoom.id ? <button onClick={this.props.leaveMeeting} className="delete">LEAVE MEETING</button> : <button onClick={() => this.props.addMeetingId(this.props.selectedRoom.id)}className="add">JOIN</button> }
            </div>
        )
    }
}

export default MeetingRoomDisplayTile