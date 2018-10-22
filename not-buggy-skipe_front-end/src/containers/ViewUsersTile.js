import React, { Component } from 'react'

class ViewUsersTile extends Component {
    render() {
        const currentContacts = this.props.user.contacts.map(contact => contact.user_2)
        const currentUser = this.props.user
        const initialfilteredUsers = this.props.allUsers.filter(user => user.id !== currentUser.id)
        const currentContactsIds = currentContacts.map(contact => contact.id)
        const initialfilteredUsersIds = initialfilteredUsers.map(user => user.id)
        const finalListIds = initialfilteredUsersIds.filter(id => currentContactsIds.includes(id) === false)
        
        const finalList = initialfilteredUsers.filter(user => finalListIds.includes(user.id))
        const potentialContacts = finalList.map(user => { return <li key={user.id} >{user.username}<button onClick={() => this.props.addContact(currentUser.id, user.id)}>add</button></li>})

        return(
            <div>
                USERS
                <ul>{potentialContacts}</ul>
            </div>
        )
    }
}

export default ViewUsersTile