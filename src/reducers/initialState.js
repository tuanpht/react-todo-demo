import TodoApi from '../apis/todos'
import FilterTypes from '../constants/FilterTypes'

export default {
    todos: TodoApi.get(),
    filterType: FilterTypes.ALL
}
