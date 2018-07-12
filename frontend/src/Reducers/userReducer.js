const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        id: action.id,
        name: action.name
      };
    case 'USER_SIGN_UP':
      return {
        name: action.name,
        email: action.email,
        password: action.password
      };
    default:
      return state;

  }
};

export default userReducer;