export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        action.payload,
        ...state
      ];

    case 'EDIT_TODO':
      const { todo } = action.payload;
      const index = state.indexOf(state.find(t => t.id === todo.id));

      return [
        ...state.slice(0, index),
        Object.assign({}, todo),
        ...state.slice(index + 1)
      ];

    default:
      return state;
  }
}