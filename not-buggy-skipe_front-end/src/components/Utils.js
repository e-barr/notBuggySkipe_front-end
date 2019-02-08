import React from 'react'

export const renderField = ({ input, label, meta, type }) => {
    const renderError = ({ error, touched }) => {
        if (error && touched) {
            return (
                <div className="ui error">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    const className = `field ${meta.error && meta.touched ? 'error' : ''}`

    return (
        <div className={className}>
            <label>{label}</label>
            <input {...input} 
            placeholder={label}
            type={type} />
            <div>{renderError(meta)}</div>
        </div>
    )
}

