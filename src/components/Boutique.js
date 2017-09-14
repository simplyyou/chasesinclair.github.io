import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import {Helmet} from 'react-helmet';
import boutique from '../images/fulls/boutique.jpg';
import clothing from '../images/fulls/clothing.jpg';
import coffee from '../images/fulls/coffee-shop.jpg';
import gold from '../images/fulls/gold.jpg';
import necklace from '../images/fulls/necklace.jpg';
import ring from '../images/fulls/ring.jpg';


class Boutique extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <meta name="description" content="Simply You Boutique" />
            <meta name="robots" content="index,follow" />
            <title>Boutique</title>
        </Helmet>
        <Grid className="container-fluid">
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src={boutique} alt="242x200">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={coffee} alt="242x200">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={gold} alt="242x200">
              </Thumbnail>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src={necklace} alt="242x200">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={ring} alt="242x200">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={clothing} alt="242x200">
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </div>
  );
  }
}

export default Boutique;

