import React, { Component } from 'react'
import { connect } from 'react-redux'

import { toggleShowInvites } from '../actions'

class ViewInvites extends Component {
    render() {
        return (
            <div className="ui raised padded text container segment">
                <h1>Invites</h1>
                    <div className="container">insert info here
                    <button
                        className="ui right floated button"
                        onClick={this.props.toggleShowInvites}
                        >
                        Cancel
                    </button>
                </div>
            </div>
        )
    }
}

export default connect(null, { toggleShowInvites })(ViewInvites);