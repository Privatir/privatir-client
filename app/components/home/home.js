import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import { setTitle } from '../../utils';
import { logoutUser } from '../../actions/sessions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    setTitle('Home');
  }

  logout(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(logoutUser());
  }

  render() {
    return (
      <section className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Privatir</h2>
            <div className="clearfix"/>
            <div>
              <p>Home Page</p>
            </div>
            <div className="clearfix">
              <button onClick={this.logout} className="btn btn-primary btn-md">Logout</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(
  (dispatch) => {
    return ({
      actions: bindActionCreators({ logoutUser }, dispatch)
    });
  }
)(Home);