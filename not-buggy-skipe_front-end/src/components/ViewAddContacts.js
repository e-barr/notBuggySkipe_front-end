import React, { Component } from 'react'
import { connect } from 'react-redux'

import { toggleAddContacts, fetchAllUsers, addContact } from '../actions'

class ViewAddContacts extends Component {
    componentDidMount() {
        this.props.fetchAllUsers()
    }

    renderPossibleContacts = () => {
        const user = this.props.user
        console.log(this.props)
        if (!this.props.allUsers) {
            return null
        }

        const contacts = this.props.allUsers
        return contacts.map(contact => {
            return (
                <div className="item" key={contact.id}>
                    <div className="right floated content">
                        <button
                            className="ui right floated button"
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
                <h2>ViewAddContacts</h2>
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