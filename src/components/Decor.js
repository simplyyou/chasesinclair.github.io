import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import interior1 from '../images/home_interior1.JPG';
import interior2 from '../images/home_interior2.JPG';
import interior3 from '../images/home_interior3.JPG';
import interior4 from '../images/interiors4.jpg';
import Flowers from '../images/Flowers.jpg';


class Decor extends Component {
  render() {
    return (
      <div>
        <Grid className="container-fluid">
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src={interior1} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={interior2} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={interior3} alt="Interiors">
              </Thumbnail>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src={interior4} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={Flowers} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={interior4} alt="Interiors">
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </div>
  );
  }
}

export default Decor;

