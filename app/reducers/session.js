import Constants from '../constants';

const initialState = {
  csrf: null,
  username: null,
  isAuthenticated: false,
  isAuthenticating: false,
  isEmailVerified: false,
  statusText: null
};

export default function session(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case Constants.VERIFY_EMAIL:
      return {
        ...state,
        isEmailVerified: true,
        statusText: `Email has been verified!`
      }
    case Constants.LOGIN_USER_REQUEST:
      return {
        ...state,
        isAuthenticating: true,
        statusText: null
      }
    case Constants.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isAuthenticating: false,
        csrf: payload.csrf,
        username: "user1",
        statusText: 'You have been successfully logged in.'
      }
    case Constants.LOGIN_USER_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        isAuthenticating: false,
        csrf: null,
        username: null,
        statusText: `Authentication Error: ${payload.status} ${payload.statusText}`
      }
    case Constants.LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        csrf: null,
        username: null,
        statusText: 'You have been successfully logged out.'
      }
    case Constants.CLOSE_ALERT:
      return {
        ...state,
        statusText: null
      }
    default:
      return state;
  }
}
