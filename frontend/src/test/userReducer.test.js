import userReducer from '../Reducers/userReducer';
import * as actions from '../Actions/index';

describe('User Reducer', () => {
  test('should a default state of an empty object', () => {
    const expected = {};
    const result = userReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  test('should return ', () => {
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
});
