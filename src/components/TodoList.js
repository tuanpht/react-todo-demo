import React from 'react'
import List from '@material-ui/core/List'
import Todo from './Todo'

export default ({ todos, toggleTodo, deleteTodo }) => (
    <List>
        {todos.map(todo => (
            <Todo key={todo.id}
                text={todo.text}
                completed={todo.completed}
                onClick={() => toggleTodo(todo.id)}
                onClickDelete={() => deleteTodo(todo.id)}
            />
        ))}
    </List>
)
