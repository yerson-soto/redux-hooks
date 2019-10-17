import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
    return (
      <Provider store={store}>
        <div className="main">
            <TodoForm />
            <TodoList />
        </div>
      </Provider>
    )
}

export default App;
