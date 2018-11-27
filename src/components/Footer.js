import React from 'react'
import FilterTypes from '../constants/FilterTypes'
import FilterLink from '../containers/FilterLink'

export default () => (
    <p>
        Show: <FilterLink filterType={FilterTypes.ALL}>All</FilterLink>
        <FilterLink filterType={FilterTypes.ACTIVE}>Active</FilterLink>
        <FilterLink filterType={FilterTypes.COMPLETED}>Completed</FilterLink>
    </p>
)
