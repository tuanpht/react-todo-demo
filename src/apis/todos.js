const getTodos = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

const saveTodo = todo => {
    let todos = getTodos()
    let existed = false
    todos = todos.map(oldTodo => {
        if (oldTodo.id === todo.id) {
            existed = true
            return {...oldTodo, ...todo}
        }
        return oldTodo
    })

    if (!existed) {
        todos.push(todo)
    }
    localStorage.setItem('todos', JSON.stringify(todos))
}

export default {
    get: getTodos,
    save: saveTodo
}
