import { combineReducers } from 'redux';

import categories from './categories';
import todos from './todos';

const todoApp = combineReducers({
  categories,
  todos
});

export default todoApp;