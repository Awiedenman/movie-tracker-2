const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        email: action.email,
        password: action.password
      };
    default:
      return state;
  }
};

export default userReducer;