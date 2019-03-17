import './app.scss'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import routes from '../routes';
import Login from '../components/login/login';
import typography from '../utils/typography'
import { Grid } from '@material/react-layout-grid';

class App extends Component {
  render() {
    return (
      <div>
        {typography.injectStyles()}
        {routes}
        <Grid>
          {this.props.children}
          <Footer style={{ width: `50%` }} />
        </Grid>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    session: state.session
  })
)(App);
