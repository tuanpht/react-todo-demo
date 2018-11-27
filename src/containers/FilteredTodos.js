import { connect } from 'react-redux'
import FilterTypes from '../constants/FilterTypes'
import TodoList from '../components/TodoList'

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

const mapStateToProps = state => ({
    todos: filterTodos(state.todos, state.filterType)
})

export default connect(mapStateToProps)(TodoList)
