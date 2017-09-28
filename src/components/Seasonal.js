import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import seasonal1 from '../images/seasonal/seasonal1.jpg';
import seasonal2 from '../images/seasonal/seasonal2.jpg';
import seasonal3 from '../images/seasonal/seasonal3.jpg';
import seasonal4 from '../images/seasonal/seasonal4.jpg';
import seasonal5 from '../images/seasonal/seasonal5.jpg';
import seasonal6 from '../images/seasonal/seasonal6.jpg';
import seasonal7 from '../images/seasonal/seasonal7.jpg';
import seasonal8 from '../images/seasonal/seasonal8.jpg';
import seasonal9 from '../images/seasonal/seasonal9.jpg';
import seasonal11 from '../images/seasonal/seasonal11.jpg';
import deliver from '../images/interiors/deliver_items.png';


class Seasonal extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <meta name="description" content="Simply You Seasonal" />
            <meta name="robots" content="index,follow" />
            <title>Seasonal</title>
        </Helmet>
        <Grid className="container-fluid">
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src={seasonal1} alt="242x200">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={deliver} alt="242x200">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={seasonal4} alt="242x200">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={seasonal2} alt="242x200">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={seasonal11} alt="242x200">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={seasonal9} alt="242x200">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={seasonal3} alt="242x200">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={seasonal5} alt="242x200">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={seasonal6} alt="242x200">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={seasonal7} alt="242x200">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={seasonal8} alt="242x200">
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </div>
  );
  }
}

export default Seasonal;

