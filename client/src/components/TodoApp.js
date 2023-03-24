import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const todoText = e.target.elements.todoText.value.trim();
    if (!todoText) return;
    setTodos([...todos, todoText]);
    e.target.elements.todoText.value = '';
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleAddTodo}>
        <input type="text" name="todoText" placeholder="Add a new todo" />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
