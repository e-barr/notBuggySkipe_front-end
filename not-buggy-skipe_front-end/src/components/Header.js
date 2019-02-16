import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../actions'

class Header extends Component {
    render() {
        let location
        this.props.isSignedIn ? location = "/main" : location = "/"
        return (
            <div>
                <Link to={location}><h1 style={{ color: 'red', textShadow: '#CCC 1px 0 10px'}}>TwoChat</h1></Link>
                <div className="ui borderless menu">    
                        { this.props.isSignedIn ? <Link to="/main" className="item">Home</Link> : <Link to="/login" className="item">Login</Link>}
                        <Link to="/about" className="item">About</Link>
                        <Link to="/contact" className="item">Contact</Link>
                        <div className="right menu">
                            <div className="item">
                                { this.props.isSignedIn ? 
                                <button 
                                    onClick={this.props.logout}
                                    className="ui red button"
                                >
                                    Logout
                                </button> : <Link to="/signup" className="ui green button">Sign Up</Link> }
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { logout })(Header);