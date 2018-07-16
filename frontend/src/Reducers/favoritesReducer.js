export const favoritesReducer = ( state = [], action) => {
  // console.log(action)
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, {favorite: action.favorite, userId: action.userId}];
     
    case 'CLEAR_USER_FAVORITES': 
      return [];
    default:
      return state;
  }
};