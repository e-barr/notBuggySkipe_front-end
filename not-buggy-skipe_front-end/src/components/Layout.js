import React from 'react'
import Header from './Header'
import Content from './Content'

const Layout = props => {
    return (
        <div>
            <Header />
            <Content>{props.children}</Content>
        </div>
    )
}

export default Layout