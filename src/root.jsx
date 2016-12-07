import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './app.jsx';
import TodoList from './components/todo-list';

const Root = () =>
  <Router history={browserHistory} >
    <Route path="/" component={App}>
      <Route path="category/:categoryId" component={TodoList} />
    </Route>
  </Router>;

export default Root;