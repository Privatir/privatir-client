import './login.scss';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setTitle } from '../../utils';
import { loginUser, closeAlert } from '../../actions/sessions';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import TextField, { HelperText, Input } from '@material/react-text-field';
import Checkbox from '@material/react-checkbox';
import { Button } from '@material/react-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
      remainLoggedIn: false,
      submitted: false,
      touched: {
        email: false,
        password: false
      }
    }
    this.showAlert = this.showAlert.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentDidMount() {
    setTitle('Login');
  }

  handleBlur(field) {
    return function (evt) {
      this.setState({
        touched: { ...this.state.touched, [field]: true }
      })
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    const { email, password } = this.state;
    const { actions } = this.props;
    if (email && password) {
      actions.loginUser({ email: email, password: password });
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

  validate(email, password) {
    return {
      email: email.length === 0,
      password: password.length < 8
    }
  }


  render() {
    const { statusText } = this.props;
    const errors = this.validate(this.state.email, this.state.password)
    const isEnabled = !Object.keys(errors).some(x => errors[x])
    const isDisabled = !isEnabled
    let alert = (statusText ? this.showAlert(statusText) : '');
    return (
      <Row>
        <Cell columns={6}>
          <div style={{ display: `flex`, marginTop: `5rem` }}>
            <Card style={{ width: `500px`, margin: `auto` }}>
              <div style={{ display: `flex`, justifyContent: `center`, alignItems: `center`, margin: `1rem auto` }}>
                <svg width="50" height="50"
                  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <a href="/">
                    <image xlinkHref="https://s3.amazonaws.com/privatir.com/privatir-shortform.svg" height="50" width="50" />
                  </a>
                </svg>
              </div>
              <div>
                <h1 style={{ alignSelf: `left`, margin: `0 1rem` }}>Sign In</h1>
              </div>
              <form style={{ display: `flex`, flexDirection: `column`, margin: `1rem 1rem` }}
                className="signin" onSubmit={this.handleSubmit}>
                <div style={{ display: `flex`, flexDirection: `column` }}>
                  <TextField
                    label='Email'
                    helperText={<HelperText>Please enter your email.</HelperText>}
                  ><Input
                      name="email"
                      type="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                      required={true}
                    />
                  </TextField>
                  <TextField
                    label='Password'
                    helperText={<HelperText>Please enter your password.</HelperText>}
                  ><Input
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                      required={true}
                    />
                  </TextField>
                  <div className="mdc-form-field" style={{ display: `flex`, alignItems: `center` }}>
                    <Checkbox
                      nativeControlId='sign-in-checkbox'
                      checked={this.state.checked}
                      onChange={(e) =>
                        this.setState({
                          checked: e.target.checked,
                        })
                      }
                    />
                    <label htmlFor='sign-in-checkbox'>Keep me signed in on this computer</label>
                  </div>
                  <div style={{ display: `flex`, flexDirection: `column`, justifyContent: `space-evenly`, height: `300px` }}>
                    <Button raised={true} disabled={isDisabled}>
                      Sign in to Privatir
                    </Button>
                    <hr style={{ borderWidth: `5px`, margin: `15px 0` }} />
                    <span style={{ textAlign: `center`, textTransform: `uppercase`, fontWeight: `bold` }}>or</span>
                    <Button outlined={true} icon={<FontAwesomeIcon icon={['fab', 'facebook']} />} >
                      Sign in with Facebook
                    </Button>
                    <Button outlined={true} icon={<FontAwesomeIcon icon={['fab', 'google']} />}>
                      Sign in with Google
                    </Button>
                  </div>
                </div>
              </form>
            </Card>
            { /*
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
          */}

          </div>
        </Cell>
      </Row >
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
