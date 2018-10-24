import React, { Component } from 'react'

class ContactsTile extends Component {
    render() {
        const { viewUsers, contacts, removeContact, createInvite, currentUserId } = this.props
        return (
            <div className="contacts-tile">
                <p>ADDRESS BOOK</p>
                <button onClick={viewUsers} className="view">VIEW NEW CONTACTS</button>
                { contacts.length > 0 ? <div>{contacts.map(contact => <li key={contact.id}>{contact.user_2.username}<button onClick={() => createInvite(currentUserId, contact.user_2.id, contact.user_2.username)} className="add">SEND INVITE</button><button onClick={() => removeContact(contact.id)} className="delete">DELETE</button></li>)}</div> : <p>You currently have no contacts.</p>}
            </div>
        )
    }
}

export default ContactsTile