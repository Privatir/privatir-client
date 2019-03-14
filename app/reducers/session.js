import Constants from '../constants';
import jwtDecode from 'jwt-decode';

const initialState = {
  token: null,
  username: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null
};

export default function session(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
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
      token: payload.token,
      username: jwtDecode(payload.token).sub,
      statusText: 'You have been successfully logged in.'
    }
  case Constants.LOGIN_USER_FAILURE:
    return {
      ...state,
      isAuthenticated: false,
      isAuthenticating: false,
      token: null,
      username: null,
      statusText: `Authentication Error: ${payload.status} ${payload.statusText}`
    }
  case Constants.LOGOUT_USER:
    return {
      ...state,
      isAuthenticated: false,
      token: null,
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
