import reducer from './auth';
import * as actions from '../actions/actionTypes';

describe('auth reducer', () => {
  it('should render the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: '/'
    });
  });

  it('should store a token upon login', () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectPath: '/'
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          idToken: 'some-token',
          userId: 'some-user-id'
        }
      )
    ).toEqual({
      token: 'some-token',
      userId: 'some-user-id',
      error: null,
      loading: false,
      authRedirectPath: '/'
    });
  });
});
