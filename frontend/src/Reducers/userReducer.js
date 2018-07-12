const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        id: action.id,
        name: action.name
      };
    default:
      return state;
  }
};

export default userReducer;