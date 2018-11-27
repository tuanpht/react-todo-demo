export const addTodo = text => ({
    type: 'ADD',
    text
})

export const editTodo = (id, text) => ({
    type: 'EDIT',
    id,
    text
})

export const toggleTodo = id => ({
    type: 'TOGGLE_STATUS',
    id
})

export const deleteTodo = id => ({
    type: 'DELETE',
    id
})

export const filterTodo = filterType => ({
    type: 'FILTER',
    filterType
})
