import React, { Component } from 'react'

class Header extends Component {
    render() {
        console.log(this.props)
            return (
                <div>
                    <strong>NotBuggySkipe</strong>
                    <button onClick={this.props.logout}>Log out</button>
                </div>
            )
    }
}

export default Header