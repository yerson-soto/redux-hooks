import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodoAction, toggleTodoAction } from '../actions';

const TodoList = () => {

    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();

    return (
        <ul className="todo-list">
            {
                todos.map(todo => (
                    <li key={todo.id}>
                        <input 
                            type="checkbox"  
                            checked={todo.complete}
                            onChange={dispatch.bind(null, toggleTodoAction(todo.id))}
                        />
                        <span className={(todo.complete) ? 'complete' : null}>{todo.name}</span>
                        <span className="delete-button" onClick={dispatch.bind(null, deleteTodoAction(todo.id))}>x</span>
                    </li>
                ))
            }
        </ul>
    )
}

export default TodoList;