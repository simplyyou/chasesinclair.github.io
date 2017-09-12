import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import interior1 from '../images/interiors/home_interior1.JPG';
import interior2 from '../images/interiors/home_interior2.JPG';
import interior3 from '../images/interiors/home_interior3.JPG';
import interior4 from '../images/interiors/interiors4.jpg';
import Flowers from '../images/interiors/Flowers.jpg';
import interior5 from '../images/interiors/interiors5.jpg';
import interior6 from '../images/interiors/interiors6.jpg';
import interior7 from '../images/interiors/interiors7.jpg';
import interior8 from '../images/interiors/interiors8.jpg';
import interior9 from '../images/interiors/interiors9.jpg';
import interior10 from '../images/interiors/interiors10.jpg';
import interior11 from '../images/interiors/interiors11.jpg';
import interior12 from '../images/interiors/interiors12.jpg';
import interior13 from '../images/interiors/interiors13.jpg';
import interior14 from '../images/interiors/interiors14.jpg';
import interior15 from '../images/interiors/interiors15.jpg';
import interior16 from '../images/interiors/interiors16.jpg';
import interior17 from '../images/interiors/interiors17.jpg';
import interior18 from '../images/interiors/interiors18.jpg';
import interior19 from '../images/interiors/interiors19.jpg';
import interior20 from '../images/interiors/interiors20.jpg';
import deliver from '../images/interiors/deliver.png';


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
              <Thumbnail src={deliver} alt="Interiors">
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
              <Thumbnail src={interior5} alt="Interiors">
              </Thumbnail>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src={interior6} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={interior7} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={interior8} alt="Interiors">
              </Thumbnail>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src={interior9} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={interior10} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={interior11} alt="Interiors">
              </Thumbnail>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src={interior12} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={interior13} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={interior14} alt="Interiors">
              </Thumbnail>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src={interior15} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={interior16} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={interior17} alt="Interiors">
              </Thumbnail>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src={interior18} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={interior19} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={interior20} alt="Interiors">
              </Thumbnail>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src={interior2} alt="Interiors">
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </div>
  );
  }
}

export default Decor;

