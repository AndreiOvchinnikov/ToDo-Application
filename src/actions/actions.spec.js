import { addTodo, ADD_TODO, setTodoText, SET_TODO_TEXT } from "./actions";
import * as generator from "../utils/generateId";

it('should create an action to add new task with random id', () => {
    const stub = jest.spyOn(generator, 'generateId').mockReturnValue('random id')
    const action = addTodo('task text')
    expect(action).toEqual({
        type: ADD_TODO,
        payload: {
            text: 'task text',
            id: 'random id',
        }
    })

    stub.mockReset()
})

it('should create an action to set text to task', () => {
    const action = setTodoText('task text', 'task id')
    expect(action).toEqual({
        type: SET_TODO_TEXT,
        payload: {
            text: 'task text',
            id: 'task id',
        }
    })
})