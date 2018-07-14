const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        id: action.id,
        name: action.name
      };
    case 'USER_SIGN_UP':
      return {
        id: action.id
      };
    case 'USER_SIGN_OUT':
      return {};
    default:
      return state;

  }
};

export default userReducer;