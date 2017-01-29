export default (state = { showDone: false, searchQuery: '' }, action) => {
  switch (action.type) {
    case 'TOGGLE_DONE_FILTER':
      return Object.assign({}, state, { showDone: !state.showDone });

    case 'SEARCH_FILTER':
      return Object.assign({}, state, { searchQuery: action.payload.searchQuery });

    default:
      return state;
  }
}