import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    deleteContact,
    setInviteReceiver,
    toggleAddContacts
} from '../actions'

const addressCardStyle = {
    fontSize: '36px',
    marginTop: '30px'
}

class ViewAddressBook extends Component {
    getUniqueContacts = () => {
        const contacts = this.props.user.contacts.map(contact => contact.user_2)
        const contactIds = contacts.map(contact => contact.id)

        const uniqueContactIds = []

        contactIds.forEach(contactId => uniqueContactIds.includes(contactId) === false ? uniqueContactIds.push(contactId) : null)

        const uniqueContacts = uniqueContactIds.map(contactId => contacts.find(contact => contact.id === contactId))

        return uniqueContacts
    }

    renderContacts = contacts => {
        return contacts.map(contact => {
            const user = contact.user_2
            const { username, image_url } = user
            return (
                <div className="card" key={contact.id}>
                    <div className="content">
                        <div
                        className="description"
                        style={addressCardStyle}
                        >
                            {username}
                        </div>
                        <img className="ui floated right tiny image"
                        src={image_url}
                        alt={username}
                        />
                    </div>
                    <div className="extra content">
                        <div className="ui two buttons">
                            <div
                                className="ui basic green button"
                                onClick={() => {
                                    this.props.setInviteReceiver(user)
                                    this.props.toggleSendInviteForm()
                                    }
                                }
                            >
                                Send Invite
                            </div>
                            <div
                            className="ui basic red button"
                            onClick={() => this.props.deleteContact(contact.id)}
                            >
                                Delete
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        const contacts = this.props.contacts
        return (
            <div className="ui raised padded container segment">
                    <h1>Address Book</h1><button 
                        className="circular ui right floated icon button"
                        style={{ marginTop: '-45px', marginRight: '5px'}}
                        onClick={this.props.toggleAddContacts}
                        >
                        <i className="plus icon"></i>
                        </button>
                <div className="ui cards">
                    {this.renderContacts(contacts)}
                    <br></br>
                    <br></br>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button
                    className="ui right floated button"
                    onClick={this.props.toggleViewAddressBook}
                    style={{ marginTop: '-35px' }}
                    >
                    Close
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.currentUser
    }
}

export default connect(mapStateToProps, { deleteContact, setInviteReceiver, toggleAddContacts })(ViewAddressBook);