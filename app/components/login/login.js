import './login.scss';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setTitle } from '../../utils';
import { loginUser, closeAlert } from '../../actions/sessions';

class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      email: '',
      password: '',
      submitted: false
    }
    this.showAlert = this.showAlert.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    setTitle('Login');
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { actions } = this.props;
    if (username && password) {
      actions.loginUser({ email: username, password: password });
    }
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
    const { username, password, submitted } = this.state;
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
            <form className="signin" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Email address</label>
                <input name="username" value={username} onChange={this.handleChange} placeholder="Email" required={true}/>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input name="password" value={password} onChange={this.handleChange} placeholder="Password" required={true}/>
              </div>
              <div className="form-group">
                <button disabled={isAuthenticating} className="btn btn-primary">Sign in</button>
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
  (dispatch) => {
    return ({
      actions: bindActionCreators({ loginUser, closeAlert }, dispatch)
    });
  }
)(Login);
