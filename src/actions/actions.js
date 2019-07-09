import {generateId} from "../utils/generateId";

const ADD_TODO = "ADD_TODO"
const DELETE_ITEM = 'DELETE_ITEM'
const SET_TODO_TEXT = 'SET_ITEM_TEXT'
const SET_TODO_COMPLETED = 'SET_TODO_COMPLETED'
const DELETE_TODO = 'DELETE_TODO'

function addTodo(text) {
    return {
        type: ADD_TODO,
        payload: {
            text,
            id: generateId(),
        },

    }
}

function setTodoCompleted(completed, id) {
    return {
        type: SET_TODO_COMPLETED,
        payload: {
            completed,
            id,
        }
    }
}

function setTodoText(text, id) {
    return {
        type: SET_TODO_TEXT,
        payload: {
            text,
            id,
        }
    }
}

function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        payload: id,
    }
}

export {
    ADD_TODO,
    DELETE_ITEM,
    SET_TODO_TEXT,
    SET_TODO_COMPLETED,
    DELETE_TODO,

    addTodo,
    setTodoCompleted,
    setTodoText,
    deleteTodo,
}