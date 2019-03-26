import React from 'react';
import Home from '../components/home/home'
import Login from '../components/login/login';
import SignUp from '../components/signup/signup'
import PrivateRoute from '../components/privateroute'
import LoginWorkspace from '../components/login/login-workspace'
import CreateWorkspace from '../components/login/create-workspace'
import { Route } from "react-router-dom";
import VerifyEmail from '../components/login/verify-email';

export default (
  <div>
    <PrivateRoute exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <Route path="/login-workspace" component={LoginWorkspace} />
    <Route path={`/create`} component={CreateWorkspace} />
    <Route path="/verify-email" component={VerifyEmail} />
  </div>
);
