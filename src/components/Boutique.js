import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
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
        <Grid className="container-fluid">
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src={boutique} alt="242x200">
                <h3>Boutique Item 1</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={coffee} alt="242x200">
                <h3>Boutique Item 2</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={gold} alt="242x200">
                <h3>Boutique Item 3</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src={necklace} alt="242x200">
                <h3>Boutique Item 4</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={ring} alt="242x200">
                <h3>Boutique Item 5</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={clothing} alt="242x200">
                <h3>Boutique Item 6</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </div>
  );
  }
}

export default Boutique;

