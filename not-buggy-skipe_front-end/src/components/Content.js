// import React from 'react'

// const Content = props => {
//     return (
//         <div>
//             {props.children}
//         </div>
//     )
// }
// export default Content

import React, { Component } from 'react'

class Content extends Component {
    render() {
        return (
            <div className="ui raised padded text container segment">
                content
            </div>
        )
    }
}

export default Content;