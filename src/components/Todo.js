import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

export default ({ text, completed, onClick }) => (
    <ListItem dense button onClick={onClick}>
        <Checkbox
            checked={completed}
            tabIndex={-1}
            disableRipple
        />
        <ListItemText primary={text} />
    </ListItem>
)
