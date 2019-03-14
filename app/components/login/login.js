import './login.scss';
import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setTitle } from '../../utils';
import { loginUser, closeAlert } from '../../actions/sessions';

class Login extends Component {
  static propTypes = {
    isAuthenticating: PropTypes.bool,
    statusText: PropTypes.string,
    actions: PropTypes.shape({
      loginUser: PropTypes.func,
      closeAlert: PropTypes.func
    })
  };

  constructor(props, context) {
    super(props, context);
    this.showAlert = this.showAlert.bind(this);
  }

  componentDidMount() {
    setTitle('Login');
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.refs;
    const { actions } = this.props;
    actions.loginUser({
      username: username.value,
      password: password.value
    });
  }

  showAlert(message) {
    const { actions } = this.props;
    return window.setTimeout(actions.closeAlert, 4000) && (
      <div className="alert alert-info fade in" role="alert">
        {message}
      </div>
    )
  }

  render() {
    const { statusText, isAuthenticating } = this.props;
    let alert = (statusText ? this.showAlert(statusText) : '');
    return (
      <section className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center">Login</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            {alert}
            <form className="signin">
              <div className="form-group">
                <label>Email address</label>
                <input ref="username" type="email" className="form-control" placeholder="Email" required="true"/>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input ref="password" type="password" className="form-control" placeholder="Password" required="true"/>
              </div>
              <div className="form-group">
                <button onClick={this.handleSubmit} disabled={isAuthenticating} className="btn btn-primary">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(
  (state) => {
    return ({
      isAuthenticating: state.session.isAuthenticating,
      statusText: state.session.statusText
    });
  },
  (dispatch) => ({
    actions: bindActionCreators({ loginUser, closeAlert }, dispatch)
  })
)(Login);
