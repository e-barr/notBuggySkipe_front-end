import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from './Header'
import Content from './Content'
import LoginForm from './LoginForm'
import About from './About'
import ContactUs from './ContactUs'
import SignUpForm from './SignUpForm'
import './App.css'
import history from '../history'
import { getUserInfo } from '../actions'

class App extends Component {
  componentDidMount() {
    if (localStorage.token) {
      this.props.getUserInfo()
    }
  }

  render() {
    return (
      <Router history={history}>
      <div className="main">
        <div className="ui container">
            <Header />
            <Switch>
              <Route path="/" component={About} />
              <Route path="/main" exact component={Content} />
              <Route path="/login" component={LoginForm} exact />
              <Route path="/about" component={About} exact />
              <Route path="/contact" component={ContactUs} />
              <Route path="/signup" component={SignUpForm} />
            </Switch>
        </div>
      </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, { getUserInfo })(App);
