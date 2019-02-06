import React, { Component } from 'react'

class InviteForm extends Component {
    state = {
        content: '',
        room_name: ''
    }

    onChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {
        const { closeInviteForm, receiverName, sendInvite, senderId, receiverId } = this.props
        return(
            <div>
                <button onClick={closeInviteForm}>X</button>
                INVITE TO: {receiverName}
                <form>
                    Room name: <input type="text" name="room_name" placeholder="required" onChange={this.onChange} />
                    Message:<input type="text" name="content" placeholder="optional" onChange={this.onChange} />
                    <button onClick={() => sendInvite(senderId, receiverId, this.state.content, this.state.room_name)}>SEND INVITE</button>
                </form>
            </div>
        )
    }
}

export default InviteForm