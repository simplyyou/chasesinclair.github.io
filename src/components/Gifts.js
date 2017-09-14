import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import furniture from '../images/fulls/furniture.jpg';
import furniture2 from '../images/fulls/furniture2.jpg';
import wine from '../images/fulls/wine_glass.jpg';
import table from '../images/fulls/table.jpg';
import welcome from '../images/fulls/welcome-to-our-home.jpg';


class Gifts extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <meta name="description" content="Simply You Gifts" />
            <meta name="robots" content="index,follow" />
            <title>Gifts</title>
        </Helmet>
        <Grid className="container-fluid">
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src={welcome} alt="242x200">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={wine} alt="242x200">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={furniture2} alt="242x200">
              </Thumbnail>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src={table} alt="242x200">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={furniture} alt="242x200">
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </div>
  );
  }
}

export default Gifts;

