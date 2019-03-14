import './header.scss';
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/sessions';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props, context) {
    super(props, context);
  }

  logout(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(logoutUser());
  }

  rightNavMenu() {
    const { isAuthenticated, username } = this.props.session;
    if (isAuthenticated) {
      return (
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            {username}&nbsp;<span className="caret"/>
          </a>
        </li>
      );
    } else {
      return (
        <li>
          <Link to="/login" className="color-white">Login</Link>
        </li>
      );
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand" id="logo">
              <span><h1>Privatir</h1></span>
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              {this.rightNavMenu()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default connect()(Header);
