import React, { PropTypes, Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../routes';
import DevTools from './devtools';

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <Router history={this.props.history} routes={routes}/>
          <DevTools/>
        </div>
      </Provider>
    );
  }
}
