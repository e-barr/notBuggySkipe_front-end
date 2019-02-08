// import React, { Component } from 'react'

// class ProfileTile extends Component {
//     render () {
//         const { username, city, country, email, image_url } = this.props.user
//         return (
//             <div>
//                 <div>
//                     <h2><img src={image_url} width="10%" height="10%" alt="user profile" />{username}</h2>
//                     <ul>{city}, {country}</ul>
//                     <ul>{email}</ul>
//                     <button onClick={this.props.editUser}>Edit</button><button onClick={this.props.logout}>Logout</button>
//                 </div>
//             </div>
//         )
//     }
// }

// export default ProfileTile

import React, { Component } from 'react'

class ProfileTile extends Component {
    render() {
        if (this.props.username) {
            const { username, city, country, image_url } = this.props
            return (
                <div className="ui raised card">
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