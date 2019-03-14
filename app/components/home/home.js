import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { setTitle } from '../../utils';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTitle('Home');
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
              <Link to="/login">
                <button className="btn btn-primary btn-md">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default connect()(Home)
