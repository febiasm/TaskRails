import React from 'react';

function DeleteTodoPage(props) {
  function handleDelete() {
    // add delete logic here
  }

  return (
    <div>
      <h1>Delete Todo</h1>
      <p>Are you sure you want to delete this todo?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DeleteTodoPage;
