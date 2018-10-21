import React, { Component } from 'react'

class ContactsTile extends Component {
    render() {
        const { viewUsers, contacts, removeContact, createInvite, currentUserId } = this.props
        return (
            <div className="contacts-tile">
                <p>ADDRESS BOOK</p>
                <button onClick={viewUsers}>ADD NEW CONTACTS</button>
                {contacts.map(contact => <li key={contact.id}>{contact.user_2.username} <button onClick={() => removeContact(contact.id)}>DELETE CONTACT</button><button onClick={() => createInvite(currentUserId, contact.user_2.id)}>SEND INVITE</button></li>)}
            </div>
        )
    }
}

export default ContactsTile