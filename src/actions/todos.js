let nextTodoId = 1
export const addTodo = text => ({
    type: 'ADD',
    text,
    id: nextTodoId++
})

export const toggleTodo = id => ({
    type: 'TOGGLE_STATUS',
    id
})

export const filterTodo = filterType => ({
    type: 'FILTER',
    filterType
})
