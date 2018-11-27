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
import withMobileDialog from '@material-ui/core/withMobileDialog'

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'confirmDialogOpened': false
        }
        this.openConfirmDialog = this.openConfirmDialog.bind(this)
        this.closeConfirmDialog = this.closeConfirmDialog.bind(this)
    }

    openConfirmDialog() {
        this.setState({confirmDialogOpened: true});
    }

    closeConfirmDialog() {
        this.setState({confirmDialogOpened: false});
    }

    render() {
        return (
            <React.Fragment>
                <ListItem dense button onClick={this.props.onClick}>
                    <Checkbox
                        checked={this.props.completed}
                        tabIndex={-1}
                        disableRipple
                    />
                    <ListItemText primary={this.props.text} />
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
