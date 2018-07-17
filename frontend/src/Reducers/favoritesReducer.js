export const favoritesReducer = ( state = [], action) => {
  // console.log(action)
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, {favorite: action.favorite, userId: action.userId}];
     
    case 'CLEAR_USER_FAVORITES': 
      return [];
    case 'ADD_EXISTING_FAVORITES': 
      return action.favorites;
    default:
      return state;
  }
};