import React, { Component } from 'react';
import { Grid, Jumbotron, Button } from 'react-bootstrap';
import banner from '../images/banner_default.jpg';

class Layout extends Component {
  render() {
    return (
      <Jumbotron>
        <Grid>
          <h1>Simply You</h1>
        </Grid>
      </Jumbotron>
    );
  }
}

export default Layout;