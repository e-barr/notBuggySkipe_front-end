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
        const { closeEditProfile, profileChangesConfirmed } = this.props
        const { image_url, username, city, country, email } = this.state
        return (
            <div>
            <form onSubmit={() => profileChangesConfirmed(this.state)}>
                <p>Image URL
                    <input type="text" name="image_url" value={image_url} onChange={this.onChange} />
                </p>
                <p>Username<input type="text" name="username" value={username} onChange={this.onChange} /></p>
                <p>City<input type="text" name="city" value={city} onChange={this.onChange} /></p>
                <p>Country<input type="text" name="country" value={country} onChange={this.onChange} /></p>
                <p>Email<input type="text" name="email" value={email} onChange={this.onChange} /></p>
                <button>Confirm Changes</button>
                <button onClick={closeEditProfile}>Cancel</button>

            </form>
            </div>
        )
    }
}

export default EditProfile