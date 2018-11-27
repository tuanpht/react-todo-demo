import TodoApi from '../apis/todos'
import initialState from './initialState'

export default (todos = initialState.todos, action) => {
    switch (action.type) {
        case 'ADD':
            let todo = TodoApi.save({
                id: null,
                text: action.text,
                completed: false
            })

            return [
                ...todos,
                todo
            ]
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
