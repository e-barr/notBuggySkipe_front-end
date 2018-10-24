import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
            return (
                <div id="header-wrapper">
                    <div id="header" className="container">
                        <div id="logo">
                            <h1><Link to={'/login'}>NotBuggySkipe</Link></h1>
                        </div>
                    <div id="menu">
                        <ul>
                            <li><Link to={'/login'} style={{weight: 'bold'}}>Login</Link></li>
                            <li><Link to={'/signup'}>Signup</Link></li>
                            <li><Link to={'/about'}>About</Link></li>
                            <li><Link to={'/contact'}>Contact Us</Link></li>
                            {/* {localStorage.token ? <li><Link to={'/login'} onClick={() => { 
                                localStorage.clear()
                                this.props.history.push('/login')
                            }}>Logout</Link></li> : null } */}
                        </ul>
                    </div>
                    </div>
                </div>
            )
    }
}

export default Header