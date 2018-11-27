import initialState from './initialState'

export default (filterType = initialState.filterType, action) => {
    switch (action.type) {
        case 'FILTER':
            return action.filterType

        default:
            return filterType
    }
}
