import React, { Component } from 'react'
import { connect } from 'react-redux'

import { toggleShowInvites } from '../actions'

class ViewInvites extends Component {
    renderInvite = (otherUser, room) => {
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
                            <p style={{ textAlign: 'center', textOverflow: 'clip' }}>{room.name}</p>
                        </div>
                            <div className="ui two bottom attached buttons">
                                <button className="ui float right green button">start</button>
                                <button className="ui red button">delete</button>
                            </div>
                    </div>
                </div>
            </div>
        )
    }

    renderReceivedInvites = (invites) => {
        return (
            <div className="ui four column grid">
                {invites.map((invite) => this.renderInvite(invite.sender, invite.room))}
            </div>
        )
    }

    renderSentInvites = (invites) => {
        return (
            <div className="ui four column grid">
                {invites.map((invite) => this.renderInvite(invite.receiver, invite.room))}
            </div>
        )
    }

    render() {
        const { received_invites, sent_invites } = this.props.user
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
                    </div>
            </div>
                <button
                    className="ui right floated button" style={{ marginTop: '-40px'}}
                    onClick={this.props.toggleShowInvites}
                    >
                    Cancel
                </button>
            </div>
        )
    }
}

export default connect(null, { toggleShowInvites })(ViewInvites);