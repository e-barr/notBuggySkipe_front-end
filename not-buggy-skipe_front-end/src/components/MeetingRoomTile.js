import React, { Component } from 'react'
import { connect } from 'react-redux'

import { endMeeting } from '../actions'
import './MeetingRoomTile.css'

class MeetingRoomTile extends Component {
    render() {
        const room = this.props.currentUser.meeting_room
        console.log(this.props)

        if (this.props.currentUser && room) {
        return (
            <div className="ui raised padded container segment" style={{ paddingBottom: '9%' }}>

                <h2>{room.name}</h2>
                <div className="iframe-container">
                    <iframe
                    src={`https://tokbox.com/embed/embed/ot-embed.js?embedId=cb6af7f6-5ac4-4691-9850-07636964bfb7&room=${room.name}&iframe=true`}
                    title={room.name}
                    allow="microphone; camera"
                    scrolling="no"
                    ></iframe>

                    </div>
                    <button
                    className="ui right floated red button"
                    style={{ marginTop: '2%' }}
                    onClick={this.props.endMeeting}
                    >
                    end
                    </button>

                    </div>
        )} else {
            return null
        }
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.auth.currentUser
    }
}
export default connect(mapStateToProps, { endMeeting })(MeetingRoomTile);