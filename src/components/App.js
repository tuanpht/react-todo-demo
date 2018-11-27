import React from 'react'
import AddTodo from '../containers/AddTodo'
import FilteredTodos from '../containers/FilteredTodos'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import { withStyles } from '@material-ui/core/styles'
import FilterButtons from '../containers/FilterButtons'

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        marginTop: '10px'
    },
});
  

const App = ({ classes }) => (
    <div>
        <CssBaseline />
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit">
                    Todo List
                </Typography>
            </Toolbar>
        </AppBar>
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <AddTodo />
                    <FilterButtons />
                    <FilteredTodos />
                </Paper>
            </Grid>
        </Grid>
    </div>
)

export default withStyles(styles)(App)
