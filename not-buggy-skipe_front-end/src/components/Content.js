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
import { isEditingProfile } from '../actions'

class Content extends Component {
    render() {
        if (this.props.user) {
            const { username, city, country, image_url } = this.props.user
            const { isEditing } = this.props.content
            console.log(this.props.user)

            if (isEditing) {
                return (
                    <EditProfile />
                )
            } else {
                return (
                    <div className="ui raised padded text container segment">
                        <div className="ui two stackable cards">
                            <ProfileTile
                                username={username}
                                city={city}
                                country={country}
                                image_url={image_url}
                                isEditingProfile={this.props.isEditingProfile}
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

export default connect(mapStateToProps, { isEditingProfile })(Content);