const updateCategory = (state, category, diff) => {
  const index = state.indexOf(category);

  return [
    ...state.slice(0, index),
    Object.assign({}, category, diff),
    ...state.slice(index + 1)
  ];
};

const toggleEditCategory = (state, action, value) => {
  const { category } = action.payload;
  return updateCategory(state, category, {
    isEditing: value
  });
};

const deleteCategory = (state, category) => {
  const index = state.indexOf(category);
  return [
    ...state.slice(0, index),
    ...state.slice(index + 1)
  ];
};

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return [
        action.payload,
        ...state
      ];

    case 'START_EDIT_CATEGORY':
      return toggleEditCategory(state, action, true);

    case 'STOP_EDIT_CATEGORY':
      return toggleEditCategory(state, action, false);

    case 'EDIT_CATEGORY':
      return updateCategory(state, action.payload.category, {
        name: action.payload.name
      });

    case 'DELETE_CATEGORY':
      return deleteCategory(state, action.payload.category);

    default:
      return state;
  }
}