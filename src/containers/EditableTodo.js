import React from 'react'
import { connect } from 'react-redux'
import Todo from '../components/Todo'
import { toggleTodo, deleteTodo, editTodo } from '../actions/todos'

const EditableTodo = ({ id, text, completed, dispatch }) => (
    <Todo key={id}
        id={id}
        text={text}
        completed={completed}
        onClick={() => dispatch(toggleTodo(id))}
        onClickDelete={() => dispatch(deleteTodo(id))}
        onEdit={newText => dispatch(editTodo(id, newText))}
    />
)

export default connect()(EditableTodo)
