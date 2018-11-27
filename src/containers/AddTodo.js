import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todos'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import AddIcon from '@material-ui/icons/AddCircleOutline'

const AddTodo = ({ dispatch }) => {
    return (
        <form onSubmit={e => {
            e.preventDefault()
            let input = e.currentTarget.todo
            if (!input.value.trim()) {
                return
            }
            dispatch(addTodo(input.value))
            input.value = ''
        }}>
            <FormControl fullWidth>
                <InputLabel htmlFor="todo-input">New Todo</InputLabel>
                <Input
                    required
                    variant="outlined"
                    id="todo-input"
                    name="todo"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton type="submit">
                                <AddIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </form>
    )
}

export default connect()(AddTodo)
