import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
            return (
                <div>
                    <div>
                        <div>
                            <h1><Link to={'/login'}>1on1VideoChat</Link></h1>
                        </div>
                    <div>
                        <ul>
                            <li><Link to={'/login'} style={{weight: 'bold'}}>Login</Link></li>
                            <li><Link to={'/signup'}>Signup</Link></li>
                            <li><Link to={'/about'}>About</Link></li>
                            <li><Link to={'/contact'}>Contact Us</Link></li>
                        </ul>
                    </div>
                    </div>
                </div>
            )
    }
}

export default Header