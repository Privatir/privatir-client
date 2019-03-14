import './app.scss'
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import Header from '../components/header/header';
import Footer from '../components/footer';
import routes from '../routes';

class App extends Component {
  render() {
    return (
      <div>
        <Header {...this.props}/>
        {routes}
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    session: state.session
  })
)(App);
