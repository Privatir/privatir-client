import React from 'react';
import ReactDOM from 'react-dom';
import configureStore, { history } from './store'
import Root from './containers';
import { loginUserSuccess } from './actions/sessions';

const store = configureStore();

let csrf = localStorage.getItem('csrf');
if (csrf !== null) {
  store.dispatch(loginUserSuccess(csrf));
}

ReactDOM.render(
  <Root store={store} history={history}/>,
  document.getElementById('root')
);