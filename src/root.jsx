import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './app.jsx';
import TodoList from './components/todo-list';
import EditTodo from './components/edit-todo';

const Root = () =>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="category/:categoryId" component={TodoList} />
    </Route>
    <Route path="/todo/:todoId" component={EditTodo}/>
  </Router>;

export default Root;