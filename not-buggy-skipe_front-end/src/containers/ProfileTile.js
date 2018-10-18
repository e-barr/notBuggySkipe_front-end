import React, { Component } from 'react'

class ProfileTile extends Component {
    render () {
        const { username, city, country, email, image_url, received_invites, sent_invites} = this.props.user
        return (
            <div className="profile-tile">
                <div>
                    <h2><img src={image_url} width="10%" height="10%" alt="user profile" />{username}</h2>
                    <ul>Location: {city}, {country}</ul>
                    <ul>Email: {email}</ul>
                    <ul>Received Invites: {received_invites.length}</ul>
                    <ul>Sent Invites: {sent_invites.length}</ul>
                    <button onClick={this.props.editUser}>Edit</button>
                </div>
            </div>
        )
    }
}

export default ProfileTile