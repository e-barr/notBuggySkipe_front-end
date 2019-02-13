import React, { Component } from 'react'

const invitesTileStyle = {
    marginTop: '90px',
    marginBottom: '80px',
    marginLeft: '20px',
    color: 'whitesmoke',
    textShadow: '2px 2px 4px grey'
}


class InvitesTile extends Component {

    render() {
        return(
            <div
                className="card"
                onClick={this.props.toggleShowInvites}
            >
                <div className="image">
                    <i className="massive envelope outline icon"
                    style={invitesTileStyle}
                    ></i>
                </div>
            </div>
        )
    }
}

export default InvitesTile;