import { setFavorite, loginRequest, logoutRequest } from '../index';
import movieMock from '../../__mocks__/movieMock';

describe('Actions', () => {
  it('It should create an action to set favorite', () => {
    const payload = movieMock;
    const expected = {
      type: 'SET_FAVORITE',
      payload,
    };
    expect(setFavorite(payload)).toEqual(expected);
  });
  it('It should create an action to loginRequest', () => {
    const payload = {
      email: 'user@password.com',
      password: 'notsecurepassword',
    };
    const expected = {
      type: 'LOGIN_REQUEST',
      payload,
    };
    expect(loginRequest(payload)).toEqual(expected);
  });
  it('It should create an action to logoutRequest', () => {
    const payload = {};
    const expected = {
      type: 'LOGOUT_REQUEST',
      payload,
    };
    expect(logoutRequest(payload)).toEqual(expected);
  });
});
