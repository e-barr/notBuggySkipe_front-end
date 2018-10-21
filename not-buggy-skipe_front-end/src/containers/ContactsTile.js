import React, { Component } from 'react'

class ContactsTile extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="contacts-tile">
                contacts tile
                <button onClick={this.props.viewUsers}>+</button>
                {this.props.contacts.map(contact => <li key={contact.id}>{contact.user_2.username} <button onClick={() => this.props.removeContact(contact.id)}>X</button><button onClick={() => this.props.createInvite(this.props.currentUserId, contact.user_2.id)}>SEND INVITE</button></li>)}
            </div>
        )
    }
}

export default ContactsTile