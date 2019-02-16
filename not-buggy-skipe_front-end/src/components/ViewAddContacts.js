import React, { Component } from 'react'
import { connect } from 'react-redux'

import { toggleAddContacts, fetchAllUsers, addContact } from '../actions'

class ViewAddContacts extends Component {
    componentDidMount() {
        this.props.fetchAllUsers()
    }

    getPossibleContacts = () => {
        const ownContacts = this.getOwnUniqueContacts()
        const ownId = this.props.user.id
        const allUsers = this.props.allUsers
        const ownContactsIds = ownContacts.map(contact => contact.id)
        
        const possibleContacts = allUsers.filter(user => ownContactsIds.includes(user.id) === false && user.id !== ownId)

        return possibleContacts
    }

    getOwnUniqueContacts = () => {
        const contacts = this.props.user.contacts.map(contact => contact.user_2)
        let ids = contacts.map(contact => contact.id)

        let uniqueIds = []

        ids.forEach(id => uniqueIds.includes(id) === false ? uniqueIds.push(id) : null)

        let uniqueContacts = uniqueIds.map(id => contacts.find(contact => contact.id === id))

        return uniqueContacts
    }

    renderPossibleContacts = () => {
        const user = this.props.user

        if (!this.props.allUsers) {
            return (
                <div className="ui active centered inline loader"></div>
            )
        }

        const contacts = this.getPossibleContacts()
        return contacts.map(contact => {
            return (
                <div className="item" key={contact.id}>
                    <div className="right floated content">
                        <button
                            className="ui right floated green button"
                            onClick={() => this.props.addContact(user.id, contact.id)}
                        >Add</button>
                    </div>
                    <img
                        className="ui avatar image"
                        src={contact.image_url}
                        alt={contact.username}
                    />
                    <div className="content">
                        {contact.username}
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="ui raised padded container segment">
                <h2>Add Contacts</h2>
                <div
                    className="ui middle aligned divided list"
                >
                    {this.renderPossibleContacts()}
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                <button
                    className="ui right floated button"
                    style={{ marginTop: '-35px' }}
                    onClick={this.props.toggleAddContacts}
                >Close</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        allUsers: state.content.allUsers,
        user: state.auth.currentUser
    }
}

export default connect(mapStateToProps, { toggleAddContacts, fetchAllUsers, addContact  })(ViewAddContacts);