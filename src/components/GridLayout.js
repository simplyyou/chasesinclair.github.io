import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Hours from './Hours';

class GridLayout extends Component {
  render() {
    const dummySentence1 = ['Located on the historic park square of Paola, Simply You offers an experience like no other. We are a full-service salon and our professional staff are dedicated to providing you with the service and personalized treatment you deserve. Whether you are looking for a new look, have a special event, or just want a day for yourself, Simply You is certain to make you feel right at home every time.'];
    const dummySentence2 = ['Services include: Hair Styling, Custom Hair Coloring, Nails, Facials, Waxing, Skincare, Makeup'];
    const dummySentence3 = ['Need a gift or something new for the season? From scarfs and purses to jewelry and make-up, come and find that trendy or new accessory for you or someone special.'];
    const dummySentence4 = ['Simply You gift cards and special packages make excellent gifts!'];

    return (
      <Grid>
        <Row className="show-grid">
          <Col sm={6} md={6}><br/>
            <Hours />
          </Col>
          <Col sm={6} md={3}><br/>{dummySentence1.slice(0, 4).join(' ')}</Col>
          <Col sm={6} md={3}><br/>{dummySentence2.slice(0, 4).join(' ')}</Col>
          <Col sm={6} md={3}><br/>{dummySentence3.slice(0, 4).join(' ')}</Col>
          <Col sm={6} md={3}><br/>{dummySentence4.slice(0, 4).join(' ')}</Col>
        </Row>
      </Grid>
    );
  }
}

export default GridLayout;