import React, { Component } from 'react';
import Social from './Social';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="text-center">
          <p className="text-muted">15 S Pearl, Paola, KS 66071  I  913.294.2252  I  simply-you-salon@att.net</p>
          <p className="text-muted">© 2016 Simply You Salon and Boutique</p>
          <Social />
        </div>
      </footer>
    );
  }
}

export default Footer;


