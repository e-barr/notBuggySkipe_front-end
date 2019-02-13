// import React from 'react'

// const Content = props => {
//     return (
//         <div>
//             {props.children}
//         </div>
//     )
// }
// export default Content

import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProfileTile from './ProfileTile'
import EditProfile from './EditProfile'
import InvitesTile from './InvitesTile'
import ViewInvites from './ViewInvites'
import MeetingRoomTile from './MeetingRoomTile'
import AddressBook from './AddressBook'
import { isEditingProfile, toggleShowInvites } from '../actions'

class Content extends Component {
    render() {
        if (this.props.user) {
            const { username, city, country, image_url } = this.props.user
            const { isEditing, isViewingInvites, isStartingMeeting } = this.props.content

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
                            <AddressBook />
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

export default connect(mapStateToProps, { isEditingProfile, toggleShowInvites })(Content);