import React, { Component } from 'react'

const invitesTileStyle = {
    marginTop: '40px',
    marginBottom: '80px'
}

class InvitesTile extends Component {

    render() {
        return(
            <div className="card">
                <div className="image">
                    <img
                        src="/images/envelope.png"
                        alt="envelope"
                        style={invitesTileStyle}
                        onClick={this.props.toggleShowInvites}
                    />
                </div>
            </div>
        )
    }
}

export default InvitesTile;