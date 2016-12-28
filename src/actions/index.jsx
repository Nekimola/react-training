let nextCategoryId = 0;
let nextTodoId = 0;

export const addCategoryAction = (name) => {
  return {
    type: 'ADD_CATEGORY',
    payload: {
      id: nextCategoryId++,
      name,
      opened: false,
      todos: []
    }
  };
};

export const addTodoAction = (name, categoryId) => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: nextTodoId++,
      categoryId,
      name,
      done: false,
      description: ''
    }
  };
};