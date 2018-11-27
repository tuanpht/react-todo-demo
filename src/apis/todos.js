const getTodos = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

const saveTodo = todo => {
    let todos = getTodos()
    let todoId = todo.id
    let lastTodo = todos[todos.length - 1]
    if (!todoId) {
        todoId = lastTodo && lastTodo.id ? lastTodo.id + 1 : 1
        todo.id = todoId
        todos.push(todo)
    } else {
        todos = todos.map(oldTodo => {
            if (oldTodo.id === todo.id) {
                return {...oldTodo, ...todo}
            }
            return oldTodo
        })
    }
    localStorage.setItem('todos', JSON.stringify(todos))

    return todo
}

const deleteTodo = id => {
    let todos = getTodos()
    let oldTodosCount = todos.length
    todos = todos.filter(todo => todo.id !== id)
    localStorage.setItem('todos', JSON.stringify(todos))

    return oldTodosCount !== todos.length
}

export default {
    get: getTodos,
    save: saveTodo,
    delete: deleteTodo
}
