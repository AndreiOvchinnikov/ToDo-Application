import * as React from 'react'
import {connect} from 'react-redux'
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import { getTodoById } from '../../state/selectors';
import { setTodoCompleted, setTodoText, deleteTodo } from '../../actions/actions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    todoItem: {
        display: 'flex',
        padding: '10px 0',
    },
    input: {
        flexGrow: 1,
    },
    checkbox: {
        marginRight: 10,
    },
    deleteButton: {
        marginLeft: 10,
    }
}));

function ToDoItemComponent(props) {
    function handleToggleComplete(event, checked) {
        props.onCompletedChanged(checked, props.id)
    }

    function handleTextChanged(event) {
        props.onTextChanged(event.target.value, props.id)
    }

    const classes = useStyles()
    return (
        <li className={classes.todoItem}>
            <Checkbox
                className={classes.checkbox}
                checked={props.completed}
                onChange={handleToggleComplete}
                color="primary"
            />
            <Input
                className={classes.input}
                disabled={props.completed}
                value={props.text}
                onChange={handleTextChanged}
            />
            <Button
                className={classes.deleteButton}
                color="secondary"
                onClick={() => props.deleteTodo(props.id)}
            >
                Delete
            </Button>
        </li>
    )
}

function mapStateToProps(state, ownProps) {
    const {id} = ownProps
    return getTodoById(state, id)
}

function mapDispatchToProps(dispatch) {
    return {
        onCompletedChanged: (completed, id) => dispatch(setTodoCompleted(completed, id)),
        onTextChanged: (text, id) => dispatch(setTodoText(text, id)),
        deleteTodo: id => dispatch(deleteTodo(id)),
    }
}

const ToDoItem = connect(mapStateToProps, mapDispatchToProps)(ToDoItemComponent)

export default ToDoItem