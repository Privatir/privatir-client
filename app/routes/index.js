import React from 'react';
import { Route } from 'react-router-dom';
import App from '../containers/app';
import Home from '../components/home/home'
import Login from '../components/login/login';
import PrivateRoute from '../components/privateroute'

export default (
  <div>
    <PrivateRoute exact path="/" component={Home}/>
    <Route path="/login" component={Login}/>
  </div>
);
