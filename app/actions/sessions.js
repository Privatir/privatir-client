import fetch from 'isomorphic-fetch';
import { history } from '../store';
import constants from '../constants';
import { handleError, parseJson, buildHeaders } from '../utils';

export function closeAlert() {
  return {
    type: constants.CLOSE_ALERT
  }
}
export function loginUserSuccess(token) {
  localStorage.setItem('csrf', token);
  return {
    type: constants.LOGIN_USER_SUCCESS,
    payload: {
      csrf: token
    }
  }
}
export function loginUserFailure(error) {
  localStorage.removeItem('csrf');
  return {
    type: constants.LOGIN_USER_FAILURE,
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    }
  }
}
export function loginUserRequest() {
  return {
    type: constants.LOGIN_USER_REQUEST
  }
}
export function logout() {
  localStorage.removeItem('csrf');
  return {
    type: constants.LOGOUT_USER
  }
}
export function logoutAndRedirect() {
  return dispatch => {
    dispatch(
      logout()
    );
    dispatch(
      history.push('/login')
    );
  }
}
export function logoutUser() {
  return dispatch => {
    return fetch('/api/signin', buildHeaders('delete', true))
      .then(handleError)
      .then(parseJson)
      .then(response => {
        dispatch(logoutAndRedirect())
      }).catch(error => {
        console.log(error);
      });
  }
}
export function loginUser(data) {
  return dispatch => {
    dispatch(loginUserRequest());
    return fetch('/api/signin', buildHeaders('post', true, data))
      .then(handleError)
      .then(parseJson)
      .then(response => {
        try {
          dispatch(loginUserSuccess(response.csrf));
          history.push('/');
        } catch (e) {
          console.log(e);
          dispatch(loginUserFailure({response: { status: 401, statusText: 'Invalid Token' }}));
        }
      }).catch(error => {
        error.json().then(res => {
          dispatch(loginUserFailure({response: { status: error.status, statusText: res.data.error }}));
        });
      });
  }
}
