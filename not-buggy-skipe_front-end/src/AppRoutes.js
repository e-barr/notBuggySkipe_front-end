import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import App from './components/App'
import Content from './components/Content'
import LoginForm from './components/LoginForm'
import About from './components/About'
import ContactUs from './components/ContactUs'
import SignUpForm from './components/SignUpForm'

const AppRoutes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" component={Content} exact />
                <Route path="/login" component={LoginForm} exact />
                <Route path="/about" component={About} exact />
                <Route path="/contact" component={ContactUs} />
                <Route path="/signup" component={SignUpForm} />
            </Switch>
        </Layout>
    )
}

export default AppRoutes