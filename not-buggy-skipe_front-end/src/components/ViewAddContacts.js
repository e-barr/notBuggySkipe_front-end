import React, { Component } from 'react'
import { connect } from 'react-redux'

import { toggleAddContacts, fetchAllUsers } from '../actions'

class ViewAddContacts extends Component {
    componentDidMount() {
        this.props.fetchAllUsers()
    }

    renderPossibleContacts = () => {
        console.log(this.props)
        if (!this.props.allUsers) {
            return null
        }

        const contacts = this.props.allUsers
        return contacts.map(contact => {
            return (
                <div className="item" key={contact.id}>
                    <div className="right floated content">
                        <button className="ui right floated button">Add</button>
                    </div>
                    <img
                        className="ui avatar image"
                        src={contact.image_url}
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
        allUsers: state.content.allUsers
    }
}

export default connect(mapStateToProps, { toggleAddContacts, fetchAllUsers  })(ViewAddContacts);