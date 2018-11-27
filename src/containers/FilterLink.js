import { connect } from 'react-redux'
import { filterTodo } from '../actions/todos'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({ 
    active: state.filterType === ownProps.filterType 
})

const mapDispatchToProps = (dispatch, ownProps) => ({ 
    onClick: () => dispatch(filterTodo(ownProps.filterType)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)
