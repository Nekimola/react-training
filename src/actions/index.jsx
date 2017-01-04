let nextCategoryId = 0;
let nextTodoId = 0;

export const addCategoryAction = (name) => {
  return {
    type: 'ADD_CATEGORY',
    payload: {
      id: nextCategoryId++,
      name,
      opened: false,
      isEditing: false,
      todos: []
    }
  };
};

export const startEditCategoryAction = (category) => {
  return {
    type: 'START_EDIT_CATEGORY',
    payload: {
      category
    }
  };
};

export const editCategoryAction = (category, name) => {
  return {
    type: 'EDIT_CATEGORY',
    payload: {
      category,
      name
    }
  };
};

export const stopEditCategoryAction = (category) => {
  return {
    type: 'STOP_EDIT_CATEGORY',
    payload: {
      category
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