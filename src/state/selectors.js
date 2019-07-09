function getTodoById(state, id) {
    const todo = state.todos.find(todo => todo.id === id)
    if (!todo)
    {
        console.error('cannot find todo with id', id)
    }
    return todo
}

function getTodoIndex(state, id) {
    return state.todos.findIndex(todo => todo.id === id)
}

export {
    getTodoById,
    getTodoIndex,
}