import uuid from 'uuid';

const initialState = {
    todos: [
        {
            id: uuid(),
            name: 'Go to the gym',
            complete: false
        },
        {
            id: uuid(),
            name: 'Cook the dinner',
            complete: false
        }
    ]
}

const todosReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, payload]
            }
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo => (todo.id === payload) ? {...todo, complete: !todo.complete}: todo)
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== payload)
            }
        default:
            return state
    }
}

export default todosReducer;