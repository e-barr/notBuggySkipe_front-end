import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './containers/Layout'
import App from './containers/App'
import About from './containers/About'
import ContactUs from './containers/ContactUs'

const AppRoutes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" component={App} exact />
                <Route path="/login" component={App} exact />
                <Route path="/about" component={About} exact />
                <Route path="/contact" component={ContactUs} />
            </Switch>
        </Layout>
    )
}

export default AppRoutes