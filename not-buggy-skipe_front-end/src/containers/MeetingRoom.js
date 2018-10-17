import React, { Component } from 'react'

class MeetingRoom extends Component {
    render() {
        console.log(this.props)
        if (this.props.room) {
            return (
                <div>
                    WELCOME TO THE ROOM CALLED {this.props.room.name}
                </div>
            )
        } else {
            return (
                <div>Please join a meeting room before entering.</div>
            )
        }
    }
}

export default MeetingRoom