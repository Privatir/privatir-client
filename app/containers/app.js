import './app.scss'
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import Header from '../components/header/header';
import Footer from '../components/footer';

class App extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  render() {
    return (
      <div>
        <Header {...this.props}/>
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
