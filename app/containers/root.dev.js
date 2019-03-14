import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import App from './app';
import DevTools from './devtools';

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <App/>
        </ConnectedRouter>
        <DevTools/>
      </Provider>
    );
  }
}
