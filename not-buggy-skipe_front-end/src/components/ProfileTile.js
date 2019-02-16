import React, { Component } from 'react'

class ProfileTile extends Component {
    render() {
        if (this.props.username) {
            const { username, city, country, image_url } = this.props
            return (
                <div className="card">
                    <div className="image">
                        <img 
                        src={image_url}
                        alt={`${username}`}
                        />
                    </div>
                    <div className="content">
                            <button 
                                className="ui right floated icon button"
                                onClick={this.props.isEditingProfile}
                            >
                                <i className="edit icon"></i>
                            </button>
                        <div className="header">
                            <h2>{username}</h2>
                        </div>
                        <div className="description">
                            <p>{`${city}, ${country}`}</p>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}

export default ProfileTile;