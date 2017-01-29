import { combineReducers } from 'redux';

import categories from './categories';
import todos from './todos';
import filters from './filters';

const todoApp = combineReducers({
  categories,
  todos,
  filters
});

export default todoApp;