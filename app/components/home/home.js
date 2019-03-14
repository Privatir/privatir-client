import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { setTitle } from '../../utils';

class Home extends React.Component {
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
            <h2>Cloud Encryption Gateway</h2>
            <div className="clearfix"/>
            <div>
              <p>
                Cyphre’s Cloud Encryption Gateway (CEG) leverages Cyphre’s BlackTIE encryption technology to protect today’s enterprises as they make use of an array of hybrid cloud services.
                Through the use of CEG, enterprises can extend a diverse set of cloud services to their users while also resting assured that these services are adhering to a standard set of policies and protections determined by the enterprise.
                Cyphre’s CEG provides advanced encryption protections for any data resting in an array of public cloud storage and other critical applications while encrypting in accordance with enterprise security policies.
                The Cloud Encryption Gateway provides highly advanced and unassailable protections for the generation, access, and use of encryption keys used in the encryption and protection of data at rest in the cloud as well as data in transit between cloud and enterprise access points.
                Cyphre’s CEG product can best be defined from an industry perspective as a Cloud Access Security Broker (CASB).
                CEG can be provided in dedicated enterprise premised based solutions as well as a range of CSaaS (Cloud Security as a Service) based solutions.
              </p>
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
