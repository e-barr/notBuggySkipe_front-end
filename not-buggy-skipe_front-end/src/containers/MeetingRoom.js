import React, { Component } from 'react'

class MeetingRoom extends Component {
    render() {
        const styles = {
            width: '',
            height: '640px'
        }

        console.log(this.props)
        if (this.props.room) {
            return (
                <div>
                    WELCOME TO THE ROOM CALLED {this.props.room.name}
                   

                    <iframe title={this.props.room.name}
                        src="https://tokbox.com/embed/embed/ot-embed.js?embedId=cb6af7f6-5ac4-4691-9850-07636964bfb7&room=DEFAULT_ROOM&iframe=true"
                        width="66%"
                        height="66%"
                        allow="microphone; camera"
                    ></iframe>
    
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