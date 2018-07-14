import userReducer from '../Reducers/userReducer';
import * as actions from '../Actions/index';

describe('User Reducer', () => {
  test('should a default state of an empty object', () => {
    const expected = {};
    const result = userReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  test('should return the user that logged in', () => {
    const { userLogin } = actions;

    const mockUser = {
      email: "tman2272@aol.com",
      id: 1,
      name: "Taylor",
      password: "password"
    };

    const mockCleanedUser = {
      id: 1,
      name: "Taylor"
    };

    const result = userReducer(undefined, userLogin(mockUser));

    expect(result).toEqual(mockCleanedUser);
  });

  test('should return an id of a new user when signed up for the first time', () => {
    const { userSignUp } = actions;

    const mockUserSignUpResponse = {
      id: 56,
      message: "New user created",
      status: "success"
    };

    const result = userReducer({}, userSignUp(mockUserSignUpResponse));

    expect(result).toEqual({ id: 56 });
  });

  test('should return empty object when user signs out', () => {
    const { userSignOut } = actions;
    const result = userReducer(undefined, userSignOut());
    expect(result).toEqual({});
  });

});
