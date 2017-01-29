let nextCategoryId = 0;
let nextTodoId = 0;

export const addCategoryAction = (name, parentId) => {
  return {
    type: 'ADD_CATEGORY',
    payload: {
      id: nextCategoryId++,
      name,
      opened: true,
      isEditing: typeof parentId !== 'undefined',
      todos: [],
      parentId: typeof parentId === 'undefined' ? -1 : parentId
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

export const toggleCategoryAction = (category) => {
  return {
    type: 'TOGGLE_CATEGORY',
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

export const deleteCategoryAction = (category) => {
  return {
    type: 'DELETE_CATEGORY',
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

export const editTodoAction = (todo) => {
  return {
    type: 'EDIT_TODO',
    payload: {
      todo
    }
  };
};

export const toggleDoneFilerAction = () => {
  return {
    type: 'TOGGLE_DONE_FILTER'
  };
};

export const searchFilterAction = (searchQuery) => {
  return {
    type: 'SEARCH_FILTER',
    payload: { searchQuery }
  };
};

