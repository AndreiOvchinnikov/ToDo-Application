import * as React from 'react'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import {addTodo} from '../../actions/actions';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    addTodo: {
        display: 'flex',
        margin: '0 20px',
    },
    input: {
        flexGrow: 1,
        marginRight: 10,
    }
}));



function AddToDoComponent(props) {
    const [itemText, setItemText] = React.useState('')
    const classes = useStyles()

    function handleInput(event) {
        setItemText(event.target.value)
    }

    function handleAddItem() {
        props.addNewItem(itemText)
        setItemText('')
    }
 
    return (
        <div className={classes.addTodo}>
            <Input
                className={classes.input}
                placeholder={'Enter new item text'}
                value={itemText}
                onChange={handleInput}
                variant="outlined"
            ></Input>
            <Button
                disabled={!itemText}
                onClick={handleAddItem}
                variant="contained"
                color="primary"
            >
                Add new
            </Button>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        addNewItem: text => dispatch(addTodo(text))
    }
}

const AddToDo = connect(null, mapDispatchToProps)(AddToDoComponent)

export default AddToDo