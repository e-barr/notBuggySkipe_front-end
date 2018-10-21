import React, { Component } from 'react'

class Header extends Component {
    render() {
            return (
                <div>
                    <strong>NotBuggySkipe</strong>
                    <p>{this.props.children}</p>
                </div>
            )
    }
}

export default Header