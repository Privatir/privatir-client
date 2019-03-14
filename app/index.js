import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import configureStore from './store';
import Root from './containers';
import { loginUserSuccess } from './actions/sessions';

const history = createBrowserHistory();
const store = configureStore(history);

let token = localStorage.getItem('token');
if (token !== null) {
  store.dispatch(loginUserSuccess(token));
}

ReactDOM.render(
  <Root history={history} store={store}/>,
  document.getElementById('app')
);