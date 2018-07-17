export const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.favorite];
    case 'REMOVE_FAVORITE':
      return [...state];
    case 'CLEAR_USER_FAVORITES':
      return [];
    case 'ADD_EXISTING_FAVORITES':
      return action.favorites;
    default:
      return state;
  }
};