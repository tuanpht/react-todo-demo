export const addTodo = text => ({
    type: 'ADD',
    text
})

export const toggleTodo = id => ({
    type: 'TOGGLE_STATUS',
    id
})

export const filterTodo = filterType => ({
    type: 'FILTER',
    filterType
})
