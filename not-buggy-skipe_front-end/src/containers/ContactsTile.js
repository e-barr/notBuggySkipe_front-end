import React, { Component } from 'react'

class ContactsTile extends Component {
    render() {
        const { viewUsers, contacts, removeContact, createInvite, currentUserId } = this.props
        console.log(contacts)
        return (
            <div className="contacts-tile">
                <p>ADDRESS BOOK</p>
                <button onClick={viewUsers}>ADD NEW CONTACTS</button>
                { contacts.length > 0 ? <div>{contacts.map(contact => <li key={contact.id}>{contact.user_2.username} <button onClick={() => removeContact(contact.id)}>DELETE CONTACT</button><button onClick={() => createInvite(currentUserId, contact.user_2.id, contact.user_2.username)}>SEND INVITE</button></li>)}</div> : <p>You currently have no contacts.</p>}
            </div>
        )
    }
}

export default ContactsTile