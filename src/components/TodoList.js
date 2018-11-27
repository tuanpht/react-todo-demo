import React from 'react'
import List from '@material-ui/core/List'
import Todo from '../containers/EditableTodo'

export default ({ todos }) => (
    <List>
        {todos.map(todo => (
            <Todo key={todo.id}
                id={todo.id}
                text={todo.text}
                completed={todo.completed}
            />
        ))}
    </List>
)
