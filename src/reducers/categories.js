// import { categories } from '../categories.json';

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return [
        action.payload,
        ...state
      ];

    case 'ADD_TODO':
      console.log(action.payload);

    default:
      return state;
  }
}