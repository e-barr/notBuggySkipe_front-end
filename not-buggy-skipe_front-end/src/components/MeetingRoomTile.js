import React, { Component } from 'react'
import { connect } from 'react-redux'

import { endMeeting } from '../actions'

class MeetingRoomTile extends Component {
    render() {
        return (
            <div className="ui raised padded container segment">
                <h2>MeetingRoomTile</h2>
                <p></p>
                <button
                    className="ui red right floated button"
                    onClick={this.props.endMeeting}
                >
                    end
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.auth.currentUser
    }
}
export default connect(mapStateToProps, { endMeeting })(MeetingRoomTile);