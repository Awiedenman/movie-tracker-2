export const favoritesReducer = ( state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, {favorite: action.favorite, userId: action.userId}];
    default:
      return state;
  }
};