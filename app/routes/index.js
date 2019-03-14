import React from 'react';
import { Route } from 'react-router-dom';
import App from '../containers/app';
import Login from '../components/login/login';

export default (
  <Route path="/" component={App}>
    <Route path="login" component={Login}/>
  </Route>
);
