import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todos'

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
            <input type="text" name="todo" />
            <button type="submit">Add</button>
        </form>
    )
}

export default connect()(AddTodo)
