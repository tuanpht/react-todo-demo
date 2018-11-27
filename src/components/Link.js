import React from 'react'

export default ({ active, children, onClick }) => {
    if (active) {
        return <span className="link">{children}</span>
    }

    return (
        <a href=" "
            className="link"
            onClick={(e) => {
                e.preventDefault()
                onClick()
            }}>
            {children}
        </a>
    )
}
