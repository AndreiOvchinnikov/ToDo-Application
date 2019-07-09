import * as React from 'react'
import ToDoItem from '../containers/ToDoItem/ToDoItem';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      marginTop: 20,
    },
}));

function ToDoList(props) {
    const classes = useStyles()
    const items = props.todos.sort((todo1, todo2) => todo2.text.localeCompare(todo1.text))
    return (
        <ul className={classes.list}>
            {items.map(todo => 
                <ToDoItem
                    key={todo.id}
                    id={todo.id}
                />)
            }
        </ul>)
}

export default ToDoList