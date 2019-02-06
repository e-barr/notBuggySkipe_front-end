import React, { Component } from 'react'

class ProfileTile extends Component {
    render () {
        const { username, city, country, email, image_url } = this.props.user
        return (
            <div>
                <div>
                    <h2><img src={image_url} width="10%" height="10%" alt="user profile" />{username}</h2>
                    <ul>{city}, {country}</ul>
                    <ul>{email}</ul>
                    <button onClick={this.props.editUser}>Edit</button><button onClick={this.props.logout}>Logout</button>
                </div>
            </div>
        )
    }
}

export default ProfileTile