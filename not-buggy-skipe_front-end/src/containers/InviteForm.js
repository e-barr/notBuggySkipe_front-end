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
        console.log(this.props)
        return(
            <div className="invite-form-tile">
                THIS IS THE INVITE FORM!
                <button onClick={this.props.closeInviteForm}>X</button>
                <form>
                    Room name: <input type="text" name="room_name" placeholder="required" onChange={this.onChange} />
                    Message:<input type="text" name="content" placeholder="optional" onChange={this.onChange} />
                    <button onClick={() => this.props.sendInvite(this.props.senderId, this.props.receiverId, this.state.content, this.state.room_name)}>SEND INVITE</button>
                </form>
            </div>
        )
    }
}

export default InviteForm