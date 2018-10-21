import React, { Component } from 'react'

class EditProfile extends Component {
    state = {
        email: this.props.user.email,
        username: this.props.user.username,
        city: this.props.user.city,
        country: this.props.user.country,
        image_url: this.props.user.image_url,
        id: this.props.user.id
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        console.log(this)
        return (
            <div className="edit-profile-tile">
            <button onClick={this.props.closeEditProfile}>X</button>
            <form onSubmit={() => this.props.profileChangesConfirmed(this.state)}>
                <p>Image URL:<input type="text" name="image_url" value={this.state.image_url} onChange={this.onChange} /></p>
                <p>Username:<input type="text" name="username" value={this.state.username} onChange={this.onChange} /></p>
                <p>City:<input type="text" name="city" value={this.state.city} onChange={this.onChange} /></p>
                <p>Country:<input type="text" name="country" value={this.state.country} onChange={this.onChange} /></p>
                <p>Email:<input type="text" name="email" value={this.state.email} onChange={this.onChange} /></p>
                <button>Confirm Changes</button>

            </form>
            </div>
        )
    }
}

export default EditProfile