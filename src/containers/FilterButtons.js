import React from 'react'
import { connect } from 'react-redux'
import { filterTodo } from '../actions/todos'
import FilterTypes from '../constants/FilterTypes'
import FormGroup from '@material-ui/core/FormGroup'
import FilterListIcon from '@material-ui/icons/FilterList'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'

const FilterButton = ({ filterType, onClick }) => (
    <FormGroup row>
        <RadioGroup row onChange={(e, value) => onClick(value)} value={filterType}>
            <FormControlLabel
                label="Filter"
                control={<Radio disabled icon={<FilterListIcon />} />}
            />
            <FormControlLabel
                value={FilterTypes.ALL}
                control={<Radio />}
                label="All"
            />
            <FormControlLabel
                value={FilterTypes.ACTIVE}
                control={<Radio />}
                label="Active"
            />
            <FormControlLabel
                value={FilterTypes.COMPLETED}
                control={<Radio />}
                label="Completed"
            />
        </RadioGroup>
    </FormGroup>
)

const mapStateToProps = state => ({ 
    filterType: state.filterType
})

const mapDispatchToProps = dispatch => ({ 
    onClick: (filterType) => dispatch(filterTodo(filterType)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton)
