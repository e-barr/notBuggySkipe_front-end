import React, { Component } from 'react'
import { connect } from 'react-redux'

import { toggleSendInviteForm } from '../actions'

class SendInviteForm extends Component {
    state = {
        sender_id: this.props.user.id,
        receiver_id: this.props.inviteReceiver ? this.props.inviteReceiver.id : '' ,
        message: '',
        room_name: ''
    }

    render() {
        console.log(this.props)
        if (this.props.user) {
            return (
                <div className="ui raised padded text containe segment">
                <h2>Writing Invite to: {this.props.content.inviteReceiver.username}</h2>
                    <div className="ui form error">
                        
                        <p>message (optional)</p>
                        <input
                            name="message"
                            type="textarea"
                            placeholder="message"
                        />
                    </div>
                    <button
                        className="ui right floated button"
                        style={{ marginTop: '-35px' }}
                        onClick={toggleSendInviteForm}
                    >
                    Close</button>
                </div>
            )
        } else {
            return <div>SendInviteForm</div>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.currentUser,
        content: state.content
    }
}

export default connect(mapStateToProps, { toggleSendInviteForm })(SendInviteForm);