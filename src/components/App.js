import React from 'react'
import AddTodo from '../containers/AddTodo'
import FilteredTodos from '../containers/FilteredTodos'
import Footer from '../components/Footer'

export default () => (
    <div>
        <AddTodo />
        <FilteredTodos />
        <Footer />
    </div>
)
