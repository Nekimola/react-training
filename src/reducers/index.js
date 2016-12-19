import { combineReducers } from 'redux';

import ReducerCategories from './categories';

const todoApp = combineReducers({
  categories: ReducerCategories
});

export default todoApp;