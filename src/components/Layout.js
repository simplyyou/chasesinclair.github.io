import React, { Component } from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';

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