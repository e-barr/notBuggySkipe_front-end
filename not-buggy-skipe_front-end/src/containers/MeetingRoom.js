import React, { Component } from 'react'

class MeetingRoom extends Component {
    render() {
        if (this.props.room) {
            return (
                <div>
                    <h3>
                        WELCOME TO THE ROOM CALLED {this.props.room.name}
                    </h3>
                   

                    <p>
                        <iframe title={this.props.room.name}
                            src={`https://tokbox.com/embed/embed/ot-embed.js?embedId=cb6af7f6-5ac4-4691-9850-07636964bfb7&room=${this.props.room.name}&iframe=true`}
                            width="100%"
                            height="100%"
                            allow="microphone; camera"
                            ></iframe>
                        </p>
    
                </div>
            )
        } else {
            return (
                <div>Please join a meeting room before entering.</div>
            )
        }
    }
}

export default MeetingRoom