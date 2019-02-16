import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProfileTile from './ProfileTile'
import EditProfile from './EditProfile'
import InvitesTile from './InvitesTile'
import ViewInvites from './ViewInvites'
import MeetingRoomTile from './MeetingRoomTile'
import AddressBook from './AddressBook'
import ViewAddressBook from './ViewAddressBook'
import SendInviteForm from './SendInviteForm'
import ViewAddContacts from './ViewAddContacts'
import { 
    isEditingProfile,
    toggleShowInvites,
    toggleViewAddressBook,
    toggleSendInviteForm
} from '../actions'

class Content extends Component {
    render() {
        if (this.props.user) {
            const { username, city, country, image_url, contacts } = this.props.user
            const { isEditing, isViewingInvites, isStartingMeeting, isViewingAddressBook, isViewingSendInviteForm, isViewingAddContacts } = this.props.content

            if (isStartingMeeting) {
                return (
                    <MeetingRoomTile />
                )
            } else if (isEditing) {
                return (
                    <EditProfile />
                )
            } else if (isViewingInvites) {
                return (
                    <ViewInvites
                        user={this.props.user}
                    />
                )
            } else if (isViewingAddressBook) {
                return (
                    <ViewAddressBook
                        toggleViewAddressBook={this.props.toggleViewAddressBook}
                        contacts={contacts}
                        toggleSendInviteForm={this.props.toggleSendInviteForm}
                    />
                )
            } else if (isViewingSendInviteForm) {
                return (
                    <SendInviteForm />
                )
            } else if (isViewingAddContacts) {
                return (
                    <ViewAddContacts />
                )
            } else {
                return (
                    <div className="ui raised padded text container segment">
                        <div className="ui three stackable cards">
                            <ProfileTile
                                username={username}
                                city={city}
                                country={country}
                                image_url={image_url}
                                isEditingProfile={this.props.isEditingProfile}
                            />
                            <InvitesTile 
                                toggleShowInvites={this.props.toggleShowInvites}
                            />
                            <AddressBook
                                toggleViewAddressBook={this.props.toggleViewAddressBook}
                            />
                        </div>
                    </div>
                )
            }
        } else {
            return null
        }
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.currentUser,
        content: state.content
    }
}

export default connect(mapStateToProps, { isEditingProfile, toggleShowInvites, toggleViewAddressBook, toggleSendInviteForm })(Content);