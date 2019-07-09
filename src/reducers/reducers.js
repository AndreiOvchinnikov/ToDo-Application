import { SET_TODO_COMPLETED, SET_TODO_TEXT, ADD_TODO, DELETE_TODO } from "../actions/actions";
import initialState from "../state/initialState";
import { getTodoIndex } from "../state/selectors";

function modifiyTodoWithId(state, id, handler) {
    const todos = state.todos.slice()
    const index = getTodoIndex(state, id)
    todos[index] = handler(todos[index])

    return {
        ...state,
        todos,
    }
}

function setTodoCompleted(state, id, completed) {
    return modifiyTodoWithId(state, id, todo => ({
        ...todo,
        completed
    }))
}

function setTodoText(state, id, text) {
    return modifiyTodoWithId(state, id, todo => ({
        ...todo,
        text
    }))
}

function createNewTodoWithText(text, id) {
    return {
        text,
        completed: false,
        id,
    }
}

function deleteTodo(state, id) {
    const todos = state.todos.slice()
    const index = getTodoIndex(state, id)
    todos.splice(index, 1)

    return {
        ...state,
        todos,
    }
}

function toDoListReducer(state = initialState, action) {
    switch (action.type)
    {
        case ADD_TODO:
            return {
                ...state,
                todos: [createNewTodoWithText(action.payload.text, action.payload.id), ...state.todos],
            }

        case SET_TODO_COMPLETED:
            return setTodoCompleted(state, action.payload.id, action.payload.completed)

        
        case SET_TODO_TEXT:
            return setTodoText(state, action.payload.id, action.payload.text)    

        case DELETE_TODO:
            return deleteTodo(state, action.payload)

        default:
            return state

    }
}

export default toDoListReducer