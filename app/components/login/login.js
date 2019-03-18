import './login.scss';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setTitle } from '../../utils';
import { loginUser, closeAlert } from '../../actions/sessions';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionIcons
}
  from "@material/react-card";

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
      <Row>
        <Cell columns={6}>
          <div style={{ display: `flex`, marginTop: `5rem` }}>
            <Card>
              <CardPrimaryContent>
                <h1>Login</h1>
                <CardMedia square imageUrl='./my/fancy/image.png' />
              </CardPrimaryContent>
              <CardActions>
                <CardActionButtons>
                  <button>Click Me</button>
                </CardActionButtons>

                <CardActionIcons>
                  <i>Click Me Too!</i>
                </CardActionIcons>
              </CardActions>
            </Card>
            <form className="signin" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Email address</label>
                <input name="username" value={username} onChange={this.handleChange} placeholder="Email" required={true} />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input name="password" value={password} onChange={this.handleChange} placeholder="Password" required={true} />
              </div>
              <div className="form-group">
                <button disabled={isAuthenticating} className="btn btn-primary">Sign in</button>
              </div>
            </form>
          </div>
        </Cell>
      </Row>
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
