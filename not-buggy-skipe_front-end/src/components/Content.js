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

class Content extends Component {
    render() {
        if (this.props.user) {
            const { username, city, country, image_url } = this.props.user
            console.log(this.props.user)
            return (
                <div className="ui raised padded text container segment">
                    <div className="ui two stackable cards">
                        <ProfileTile
                            username={username}
                            city={city}
                            country={country}
                            image_url={image_url}
                        />
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        user: state.auth.currentUser
    }
}

export default connect(mapStateToProps)(Content);