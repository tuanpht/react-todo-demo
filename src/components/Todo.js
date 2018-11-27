import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import ListItem from '@material-ui/core/ListItem'
import IconButton from '@material-ui/core/IconButton'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import RemoveIcon from '@material-ui/icons/Close'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import withMobileDialog from '@material-ui/core/withMobileDialog'

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            confirmDialogOpened: false,
            isEditing: false,
            todoText: props.text
        }

        this.todoInput = React.createRef()

        this.openConfirmDialog = this.openConfirmDialog.bind(this)
        this.closeConfirmDialog = this.closeConfirmDialog.bind(this)
        this.editTodo = this.editTodo.bind(this)
        this.cancelEdit = this.cancelEdit.bind(this)
        this.handleEditTodo = this.handleEditTodo.bind(this)
    }

    openConfirmDialog() {
        this.setState({confirmDialogOpened: true});
    }

    closeConfirmDialog() {
        this.setState({confirmDialogOpened: false});
    }

    editTodo() {
        this.setState({ isEditing: true }, () => this.todoInput.current.focus())
    }

    cancelEdit() {
        this.setState({
            todoText: this.props.text,
            isEditing: false
        })
        this.todoInput.current.value = this.props.text
    }

    handleEditTodo(event) {
        // ESC
        if (event.keyCode === 27) {
            this.cancelEdit()
        // Enter
        } else if (event.keyCode === 13) {
            let newText = this.todoInput.current.value
            this.props.onEdit(newText)
            this.setState({
                todoText: newText,
                isEditing: false
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <ListItem dense button onClick={this.editTodo}>
                    <Checkbox
                        checked={this.props.completed}
                        onClick={this.props.onClick}
                        tabIndex={-1}
                        disableRipple
                    />
                    { this.state.isEditing
                        ? <TextField
                            fullWidth
                            defaultValue={this.state.todoText}
                            inputRef={this.todoInput}
                            onBlur={this.cancelEdit}
                            onKeyDown={this.handleEditTodo} />
                        : <ListItemText primary={this.state.todoText} /> }
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" onClick={this.openConfirmDialog}>
                            <RemoveIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <Dialog
                    open={this.state.confirmDialogOpened}
                    onClose={this.closeConfirmDialog}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">Delete Todo?</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to delete this todo?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.closeConfirmDialog} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.props.onClickDelete} color="secondary" autoFocus>
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        )
    }
}

export default withMobileDialog()(Todo)
