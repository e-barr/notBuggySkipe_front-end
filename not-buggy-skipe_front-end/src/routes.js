import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import App from './components/App'
import About from './components/About'
import ContactUs from './components/ContactUs'
import SignUpForm from './components/SignUpForm'

const AppRoutes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" component={App} exact />
                <Route path="/signup" component={SignUpForm} exact />
                <Route path="/login" component={App} exact />
                <Route path="/about" component={About} exact />
                <Route path="/contact" component={ContactUs} />
            </Switch>
        </Layout>
    )
}

export default AppRoutes