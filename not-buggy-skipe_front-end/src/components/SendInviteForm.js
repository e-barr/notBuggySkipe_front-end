import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import { toggleSendInviteForm, sendInvite } from '../actions'
import { renderField } from './Utils'

class SendInviteForm extends Component {
    onSubmit = (formValues) => {
        const sender_id = this.props.user.id
        const receiver_id = this.props.content.inviteReceiver.id
        const room_name = formValues.roomName
        const content = formValues.message || ''

        this.props.sendInvite({ sender_id, receiver_id, room_name, content })

    }

    renderForm = () => {
        return (
            <form
                className="ui form error"
                onSubmit={this.props.handleSubmit(this.onSubmit)}

            >

                <Field
                    name="roomName"
                    label="room name"
                    component={renderField}
                    type="text"
                />
                <Field
                    name="message"
                    label="message *(optional)"
                    component={renderField}
                    type="text"
                />

                <button
                    className="ui green button"
                    type="submit"
                >
                    Submit
                </button>

                <button
                        className="ui right floated button"
                        onClick={this.props.toggleSendInviteForm}
                    >
                    Cancel</button>
            </form>
        )
    }

    render() {
        if (this.props.user) {
            const receiver = this.props.content.inviteReceiver
            return (
                <div className="ui raised padded text containe segment">
                    <h2>Invite to {receiver.username}</h2>
                    
                    {this.renderForm()}
                </div>
            )
        } else {
            return <div>SendInviteForm</div>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.currentUser,
        content: state.content
    }
}

const validate = ({ roomName }) => {
    const errors = {}

    if (!roomName) {
        errors.roomName = 'You must enter a unique room name.'
    }

    return errors
}

const formWrapped = reduxForm({
    form: 'sendInviteForm',
    validate
})(SendInviteForm)

export default connect(mapStateToProps, { toggleSendInviteForm, sendInvite })(formWrapped);