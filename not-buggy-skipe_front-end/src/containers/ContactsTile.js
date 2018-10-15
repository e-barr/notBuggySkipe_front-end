import React, { Component } from 'react'

class ContactsTile extends Component {
    render() {
        return (
            <div className="contacts-tile">
                contacts tile
                {this.props.contacts.map(contact => <li key={contact.id}>{contact.user_2.username}</li>)}
            </div>
        )
    }
}

export default ContactsTile