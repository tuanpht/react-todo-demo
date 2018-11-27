import React from 'react'

export default ({ text, completed, onClick }) => (
    <li className={completed ? 'completed' : ''} onClick={onClick}>
        {text}
    </li>
)
