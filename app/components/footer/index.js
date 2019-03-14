import './footer.scss';
import React, { Component } from 'react';

export default class Footer extends Component {
  currentYear() {
    let today = new Date();
    return today.getFullYear();
  }

  render() {
    let year = this.currentYear();
    return (
      <footer className="footer">
        <div className="container">
          <p>&copy; {year} Cyphre, LLC</p>
        </div>
      </footer>
    );
  }
}
