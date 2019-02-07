// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

// class Header extends Component {
//     render() {
//             return (
//                 <div>
//                     <div>
//                         <div>
//                             <h1><Link to='/login'>TwoChat</Link></h1>
//                         </div>
//                     <div className="ui large menu">
//                             <Link to={'/login'} className="item">Login</Link>
//                             <Link to={'/signup'} className="item">Signup</Link>
//                             <Link to={'/about'} className="item">About</Link>
//                             <Link to={'/contact'} className="item">Contact Us</Link>
//                     </div>
//                     </div>
//                 </div>
//             )
//     }
// }

// export default Header

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../actions'

class Header extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Link to="/"><h1 style={{ color: 'black' }}>TwoChat</h1></Link>
                <div className="ui borderless menu">    
                        { this.props.isLoggedIn ? null: <Link to="/login" className="item">Login</Link>}
                        <Link to="/about" className="item">About</Link>
                        <Link to="/contact" className="item">Contact</Link>
                        <div className="right menu">
                            <div className="item">
                                { this.props.isLoggedIn ? <button>Logout</button> : <Link to="/signup" className="ui button">Sign Up</Link> }
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}

export default connect(mapStateToProps, { logout })(Header);