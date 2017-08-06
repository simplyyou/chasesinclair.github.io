import React, { Component } from 'react';
import { Grid, Row, Col, Media } from 'react-bootstrap';
import decor from '../images/fulls/decor_icon.png';
import lamp from '../images/fulls/lamp.png';
import mirror from '../images/fulls/mirror.png';
import bookshelf from '../images/fulls/bookshelf.png';

class GridLayout extends Component {
  render() {
    const dummySentence1 = ['Located on the historic park square of Paola, Simply You offers an experience like no other.'];
    const dummySentence2 = ['Services include: Hair Styling, Custom Hair Coloring, Nails, Facials, Waxing, Skincare, Makeup'];
    const dummySentence3 = ['Need a gift or something new for the season?'];
    const dummySentence4 = ['Simply You gift cards and special packages make excellent gifts!'];

    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col sm={6} md={3}>
              <Media>
                <Media.Left align="top">
                  <img src={decor} className="media-object"></img>
                </Media.Left>
                <Media.Body>
                  <Media.Heading>Decor One</Media.Heading>
                  <p>{dummySentence1.slice(0, 4).join(' ')}</p>
                </Media.Body>
              </Media>
            </Col>
            <Col sm={6} md={3}>
              <Media>
                <Media.Left align="top">
                  <img src={lamp} className="media-object"></img>
                </Media.Left>
                <Media.Body>
                  <Media.Heading>Decor Two</Media.Heading>
                  <p>{dummySentence2.slice(0, 4).join(' ')}</p>
                </Media.Body>
              </Media>
            </Col>
            <Col sm={6} md={3}>
              <Media>
                <Media.Left align="top">
                  <img src={mirror} className="media-object"></img>
                </Media.Left>
                <Media.Body>
                  <Media.Heading>Decor Three</Media.Heading>
                  <p>{dummySentence3.slice(0, 4).join(' ')}</p>
                </Media.Body>
              </Media>
            </Col>
            <Col sm={6} md={3}>
              <Media>
                <Media.Left align="top">
                  <img src={bookshelf} className="media-object"></img>
                </Media.Left>
                <Media.Body>
                  <Media.Heading>Decor Four</Media.Heading>
                  <p>{dummySentence4.slice(0, 4).join(' ')}</p>
                </Media.Body>
              </Media>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default GridLayout;