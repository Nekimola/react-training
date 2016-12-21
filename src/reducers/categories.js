import { categories } from '../categories.json';

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return [
        action.payload,
        ...state
      ];

    default:
      return state;
  }
}