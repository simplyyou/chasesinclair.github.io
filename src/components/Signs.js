import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import sign1 from '../images/signs/welcome_metal_sign1.JPG';
import sign2 from '../images/signs/welcome_metal_sign2.JPG';


class Signs extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <meta name="description" content="Simply You Signs" />
            <meta name="robots" content="index,follow" />
            <title>Signs</title>
        </Helmet>
        <h2 className="p-centered">Let us design your custom metal sign.</h2>
        <h2 className="p-centered">For questions and orders please contact us.</h2>
        <Grid className="container-fluid">
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src={sign1} alt="242x200">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={sign2} alt="242x200">
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </div>
  );
  }
}

export default Signs;

