import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../actions';
import uuid from 'uuid';

const TodoForm = () => {

    const [ todo, setTodo ] = useState('');
    const dispatch = useDispatch();

    const handleTodoChange = e => {
        setTodo(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (todo.trim() === '') return;

        // addTodo();
        dispatch(
            addTodoAction({
                id: uuid(),
                name: todo,
                complete: false
            })
        );
        
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="todo"
                placeholder="Add a todo"
                onChange={handleTodoChange}
            />
            <input 
                type="submit"
                value="Add"
            />
        </form>
    )
}

export default TodoForm;