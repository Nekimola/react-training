import { categories } from '../categories.json';

export default (state = categories, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return [
        action.payload,
        ...categories
      ];

    default:
      return state;
  }
}