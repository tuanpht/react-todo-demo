const getTodos = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

const saveTodo = todo => {
    let todos = getTodos()
    let todoId = todo.id
    if (!todoId) {
        todoId = todos.length + 1
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

export default {
    get: getTodos,
    save: saveTodo
}
