import React from 'react'

const InvitesTile = () => {
    const invitesTileStyle = {
        marginTop: '40px',
        marginBottom: '80px'
    }

    return(
        <div className="card">
            <div className="image">
                <img
                    src="/images/envelope.png"
                    alt="envelope"
                    style={invitesTileStyle}
                    onClick={() => console.log('envelope clicked!')}
                />
            </div>
            {/* <div className="content">
                <button
                    className="fluid ui button"
                >
                    View Invites
                </button>
            </div> */}
        </div>
    )
}

export default InvitesTile;