import React from 'react'

const Content = props => {
    console.log(props)
    return (
        <div>
            {props.children}
        </div>
    )
}
export default Content