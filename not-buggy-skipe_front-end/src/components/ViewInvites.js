import React, { Component } from 'react'
import { connect } from 'react-redux'

import { toggleShowInvites, deleteInvite, startMeeting } from '../actions'

class ViewInvites extends Component {
    renderInvite = (inviteId, otherUser, room, message) => {
        const { image_url, username } = otherUser

        return (
            <div className="column" key={room.id}>
                <div className="ui segment">
                    <div className="content" >
                        <div>
                            <h2 className="ui top attached header">
                                <img 
                                    className="ui circular image"
                                    src={image_url}
                                    alt={username}
                                />
                                {username}
                            </h2>
                        </div>
                        <div className="ui attached segment" >
                            <div style={{ textAlign: 'center', textOverflow: 'clip'}}>
                                {room.name}<br></br>
                                {message === "" ? '---' : message }
                            </div>
                        </div>
                            <div className="ui two bottom attached buttons">
                                <button 
                                    className="ui float right green button"
                                    onClick={() => this.props.startMeeting(this.props.currentUser, room.id)}
                                    >Start</button>
                                <button
                                    className="ui red button"
                                    invite_id={inviteId}
                                    onClick={() => this.props.deleteInvite(inviteId, this.props.currentUser.id)}
                                >Cancel</button>
                            </div>
                    </div>
                </div>
            </div>
        )
    }

    renderReceivedInvites = (invites) => {
        return (
            <div className="ui four column grid">
                {invites.map((invite) => {
                    const message = invite.content || ""
                    return this.renderInvite(invite.id, invite.sender, invite.room, message)
                })}
            </div>
        )
    }

    renderSentInvites = (invites) => {
        return (
            <div className="ui four column grid">
                {invites.map((invite) => {
                    const message = invite.content || ""
                    return this.renderInvite(invite.id, invite.receiver, invite.room, message)})}
            </div>
        )
    }

    render() {
        const { received_invites, sent_invites } = this.props.currentUser
        return (
            <div className="ui raised padded container segment">
            <div>
                <h1>Invites</h1><br></br>
                    <div className="container">
                        <h4>RECEIVED</h4>
                    
                            <div className="ui stackable divided grid">
                                {this.renderReceivedInvites(received_invites)}
                            </div>
                        <h4>SENT</h4><br></br>
                            <div className="ui stackable divided grid">
                                {this.renderSentInvites(sent_invites)}
                            </div>
                            <br></br>
                            <br></br>
                    </div>
            <button
                className="ui right floated button"
                onClick={this.props.toggleShowInvites}
                >
                Close
            </button>
            <br></br>
            <br></br>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.auth.currentUser
    }
}

export default connect(mapStateToProps, { startMeeting, toggleShowInvites, deleteInvite })(ViewInvites);