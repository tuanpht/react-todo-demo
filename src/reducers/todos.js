import TodoApi from '../apis/todos'
import initialState from './initialState'

export default (todos = initialState.todos, action) => {
    let todo
    switch (action.type) {
        case 'ADD':
            todo = TodoApi.save({
                id: null,
                text: action.text,
                completed: false
            })

            return [
                ...todos,
                todo
            ]

        case 'EDIT':
            todo = TodoApi.save({
                id: action.id,
                text: action.text,
                completed: false
            })

            return todos.map(
                oldTodo => {
                    return oldTodo.id === todo.id ? {...oldTodo, ...todo} : oldTodo
                }
            )

        case 'DELETE':
            let deleted = TodoApi.delete(action.id)

            if (deleted) {
                return todos.filter(todo => todo.id !== action.id)
            }

            return todos

        case 'TOGGLE_STATUS':
            return todos.map(
                oldTodo => {
                    let todo = oldTodo.id === action.id ? {...oldTodo, completed: !oldTodo.completed} : oldTodo
                    TodoApi.save(todo)

                    return todo
                }
            )
        default:
            return todos
    }
}
