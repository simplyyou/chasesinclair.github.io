import React, { Component } from 'react';

class Social extends Component {
  render() {
    return (
    <div>
      <a href="http://facebook.com/" className="btn btn-social-icon btn-lg btn-facebook"><i className="fa fa-facebook"></i></a>
      <a href="http://twitter.com/" className="btn btn-social-icon btn-lg btn-twitter"><i className="fa fa-twitter"></i></a>
      <a href="http://instagram.com/" className="btn btn-social-icon btn-lg btn-instagram"><i className="fa fa-instagram"></i></a>
      <a href="http://pinterest.com/" className="btn btn-social-icon btn-lg btn-pinterest"><i className="fa fa-pinterest"></i></a>
    </div>
  );
  }
}

export default Social;

