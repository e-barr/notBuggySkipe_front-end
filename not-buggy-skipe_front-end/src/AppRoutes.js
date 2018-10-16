import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './containers/Layout'
import App from './containers/App'
import Content from './containers/Content'
import LoginForm from './containers/LoginForm'
import About from './containers/About'
import ContactUs from './containers/ContactUs'

const AppRoutes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" component={Content} exact />
                <Route path="/login" component={LoginForm} exact />
                <Route path="/about" component={About} exact />
                <Route path="/contact" component={ContactUs} />
            </Switch>
        </Layout>
    )
}

export default AppRoutes