let nextCategoryId = 0;


export const addCategory = (name) => {
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