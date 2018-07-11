import userReducer from '../Reducers/userReducer';
import * as actions from '../Actions/index';

describe('User Reducer', () => {
  test('should a default state of an empty object', () => {
    const expected = null;
    const result = userReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  test('should return a state of ', () => {
    const { userLogin } = actions;
    const email= 'he@aol.com';
    const password = 'passme';
    const mockUser = {
      email,
      password
    };
    const result = userReducer(undefined, userLogin(email, password));

    expect(result).toEqual(mockUser);
  });
});
