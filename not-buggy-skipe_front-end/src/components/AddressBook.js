import React from 'react'

const addressBookStyle = {
    marginTop: '90px',
    marginBottom: '80px',
    marginLeft: '20px',
    color: 'white',
    textShadow: '2px 2px 4px grey'
}

const AddressBook = (props) => {
    return (
        <div
            className="card"
            onClick={props.toggleViewAddressBook}
        >
            <div className="image">
            <i className="massive address book outline icon" style={addressBookStyle}></i>
            </div>
        </div>
    )
}

export default AddressBook;