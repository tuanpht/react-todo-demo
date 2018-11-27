import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import { connect } from 'react-redux'
import { combineReducers } from 'redux'

// Constants
const FilterTypes = {
    ALL: 'SHOW_ALL',
    COMPLETED: 'SHOW_COMPLETED',
    ACTIVE: 'SHOW_ACTIVE',
}

// Api
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

// Reducer
const initialState = {
    todos: getTodos(),
    filterType: FilterTypes.ALL
}

const todosReducer = (todos = initialState.todos, action) => {
    switch (action.type) {
        case 'ADD':
            let todo = {
                id: action.id,
                text: action.text,
                completed: false
            }
            saveTodo(todo)

            return [
                ...todos,
                todo
            ]
        case 'TOGGLE_STATUS':
            return todos.map(
                oldTodo => {
                    let todo = oldTodo.id === action.id ? {...oldTodo, completed: !oldTodo.completed} : oldTodo
                    saveTodo(todo)

                    return todo
                }
            )
        default:
            return todos
    }
}

const filterReducer = (filterType = initialState.filterType, action) => {
    switch (action.type) {
        case 'FILTER':
            return action.filterType

        default:
            return filterType
    }
}

const reducers = combineReducers({
    todos: todosReducer,
    filterType: filterReducer
})

// Store
const store = createStore(reducers)

// Action creators
let nextTodoId = 1
const addTodo = text => ({
    type: 'ADD',
    text,
    id: nextTodoId++
})

const toggleTodo = id => ({
    type: 'TOGGLE_STATUS',
    id
})

const filterTodo = filterType => ({
    type: 'FILTER',
    filterType
})

// Components
const Todo = ({ text, completed, onClick }) => (
    <li className={completed ? 'completed' : ''} onClick={onClick}>
        {text}
    </li>
)

const TodoList = ({ todos, toggleTodo }) => (
    <ul>
        {todos.map(todo => (
            <Todo key={todo.id} text={todo.text} completed={todo.completed} onClick={() => toggleTodo(todo.id)} />
        ))}
    </ul>
)

let AddTodo = ({ dispatch }) => {
    return (
        <form onSubmit={e => {
            e.preventDefault()
            let input = e.currentTarget.todo
            dispatch(addTodo(input.value))
            input.value = ''
        }}>
            <input type="text" name="todo" />
            <button type="submit">Add</button>
        </form>
    )
}
AddTodo = connect()(AddTodo)

const filterTodos = (todos, filterType) => {
    switch (filterType) {
        case FilterTypes.ACTIVE:
            return todos.filter(todo => !todo.completed)
        case FilterTypes.COMPLETED:
            return todos.filter(todo => todo.completed)
        default:
            return todos
    }
}

const mapStateToTodoListToProps = state => ({
    todos: filterTodos(state.todos, state.filterType)
})
const mapDispatchToTodoListToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})
const FilteredTodos = connect(mapStateToTodoListToProps, mapDispatchToTodoListToProps)(TodoList)

const Link = ({ active, children, onClick }) => {
    if (active) {
        return <span className="link">{children}</span>
    }

    return (
        <a href=" "
            className="link"
            onClick={(e) => {
                e.preventDefault()
                onClick()
            }}>
            {children}
        </a>
    )
}

const FilterLink = connect(
    (state, ownProps) => ({ active: state.filterType === ownProps.filterType }),
    (dispatch, ownProps) => ({ onClick: () => dispatch(filterTodo(ownProps.filterType)) })
)(Link)

const Footer = () => (
    <p>
        Show: <FilterLink filterType={FilterTypes.ALL}>All</FilterLink>
        <FilterLink filterType={FilterTypes.ACTIVE}>Active</FilterLink>
        <FilterLink filterType={FilterTypes.COMPLETED}>Completed</FilterLink>
    </p>
)

ReactDOM.render(
    <Provider store={store}>
        <div>
            <AddTodo />
            <FilteredTodos />
            <Footer />
        </div>
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
