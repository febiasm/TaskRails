import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

function TodoListPage(props) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // TODO: Fetch todos from your API or database here
    setTodos(props.todos);
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoListPage;
