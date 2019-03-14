import React from 'react';
import ReactDOM from 'react-dom';
import configureStore, { history } from './store'
import Root from './containers';
import { loginUserSuccess } from './actions/sessions';

const store = configureStore();

let token = localStorage.getItem('token');
if (token !== null) {
  store.dispatch(loginUserSuccess(token));
}

ReactDOM.render(
  <Root store={store} history={history}/>,
  document.getElementById('root')
);