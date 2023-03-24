 
import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './component/HomePage';
import LoginPage from './component/LoginPage';
import SignupPage from './component/SignupPage';
import TodoListPage from './component/TodoListPage';
import AddTodoPage from './component/AddTodoPage';
import UpdateTodoPage from './component/UpdateTodoPage';
import DeleteTodoPage from './component/DeleteTodoPage';

function App() {
  return (
    <Route>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/todos" component={TodoListPage} />
        <Route path="/add-todo" component={AddTodoPage} />
        <Route path="/update-todo/:id" component={UpdateTodoPage} />
        <Route path="/delete-todo/:id" component={DeleteTodoPage} />
      </Switch>
    <Route>
  );
}

export default App;
