import React from 'react'

const invitesTileStyle = {
    marginTop: '90px',
    marginBottom: '80px',
    marginLeft: '20px',
    color: 'white',
    textShadow: '2px 2px 4px grey'
}

const InvitesTile = (props) => {
    return(
        <div
            className="card"
            onClick={props.toggleShowInvites}
        >
            <div className="image">
                <i className="massive envelope outline icon"
                style={invitesTileStyle}
                ></i>
            </div>
        </div>
    )
}

export default InvitesTile;