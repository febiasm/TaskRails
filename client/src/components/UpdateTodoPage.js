import React, { useState } from 'react';

function UpdateTodoPage(props) {
  const [todo, setTodo] = useState(props.todo);

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: Add update logic here
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  }

  return (
    <div>
      <h1>Update Todo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={todo.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={todo.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="completed">Completed:</label>
          <input
            type="checkbox"
            id="completed"
            name="completed"
            checked={todo.completed}
            onChange={(event) =>
              setTodo({ ...todo, completed: event.target.checked })
            }
          />
        </div>
        <button type="submit">Update Todo</button>
      </form>
    </div>
  );
}

export default UpdateTodoPage;
