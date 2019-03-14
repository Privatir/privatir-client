import fetch from 'isomorphic-fetch';
import { routeActions as route } from 'react-router-redux';
import Constants from '../constants';
import { parseJson, handleError, buildHeaders } from '../utils';

export function closeAlert() {
  return {
    type: Constants.CLOSE_ALERT
  }
}
export function loginUserSuccess(token) {
  localStorage.setItem('token', token);
  return {
    type: Constants.LOGIN_USER_SUCCESS,
    payload: {
      token: token
    }
  }
}
export function loginUserFailure(error) {
  localStorage.removeItem('token');
  return {
    type: Constants.LOGIN_USER_FAILURE,
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    }
  }
}
export function loginUserRequest() {
  return {
    type: Constants.LOGIN_USER_REQUEST
  }
}
export function logout() {
  localStorage.removeItem('token');
  return {
    type: Constants.LOGOUT_USER
  }
}
export function logoutAndRedirect() {
  return dispatch => {
    dispatch(logout());
    dispatch(route.push('/login'));
  }
}
export function logoutUser() {
  return async dispatch => {
    try {
      let response = await fetch('/api/sessions', buildHeaders('delete', true));
      response = await parseJson(handleError(response));
      dispatch(logoutAndRedirect());
    } catch (error) {
      console.log(error);
    }
  }
}
export function loginUser(data) {
  return async dispatch => {
    dispatch(loginUserRequest());
    try {
      let response = await fetch('/api/sessions', buildHeaders('post', true, data));
      response = await parseJson(handleError(response));
      try {
        dispatch(loginUserSuccess(response.data.token));
      } catch (error) {
        dispatch(
          loginUserFailure({
            response: { status: 401, statusText: 'Invalid Token' }
          })
        );
      }
    } catch (error) {
      error.json().then(res => {
        dispatch(
          loginUserFailure({
            response: { status: error.status, statusText: res.data.error }
          })
        );
      });
    }
  }
}
