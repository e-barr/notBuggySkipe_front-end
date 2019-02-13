import React, { Component } from 'react'
import { connect } from 'react-redux'

import { deleteContact } from '../actions'

const addressCardStyle = {
    fontSize: '36px',
    marginTop: '30px'
}

class ViewAddressBook extends Component {
    renderContacts = contacts => {
        return contacts.map(contact => {
            console.log(contact)
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
                            <div className="ui basic green button">Send Invite</div>
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
                <div>
                    <h1>AddressBook</h1><i className="ui floated right plus circle icon" style={{ fontSize: '40px' }}></i><br></br>
                </div>
                <div className="ui cards">
                    {this.renderContacts(contacts)}
                </div>
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

export default connect(null, { deleteContact })(ViewAddressBook);