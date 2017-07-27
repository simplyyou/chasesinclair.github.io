import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Button, Table } from 'react-bootstrap';
import thumb1 from '../images/thumbs/01.jpg';
import thumb2 from '../images/thumbs/02.jpg';
import thumb4 from '../images/thumbs/04.jpg';

class Wedding extends Component {
  render() {
    return (
      <Grid>
        <Row>
        <Col xs={6} md={4}>
          <Thumbnail src={thumb2} alt="242x200">
            <h3>Brides</h3>
            <Table responsive>
              <tbody>
                <tr>
                  <td>Bride Upstyle</td>
                  <td>starting at $55</td>
                </tr>
                <tr>
                  <td>Bridal Airbrush Make-Up</td>
                  <td>starting at $50</td>
                </tr>
                <tr>
                  <td>Bridal Make-Up</td>
                  <td>starting at $30</td>
                </tr>
              </tbody>
            </Table>
            <p>
              <Button bsStyle="primary">Button</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
          <Thumbnail src={thumb1} alt="242x200">
            <h3>Grooms</h3>
            <Table responsive>
              <tbody>
                <tr>
                  <td>Groom Service 1</td>
                  <td>starting at $55</td>
                </tr>
                <tr>
                  <td>Groom Service 2</td>
                  <td>starting at $50</td>
                </tr>
                <tr>
                  <td>Groom Service 3</td>
                  <td>starting at $30</td>
                </tr>
              </tbody>
            </Table>
            <p>
              <Button bsStyle="primary">Button</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
          <Thumbnail src={thumb4} alt="242x200">
            <h3>Wedding Party</h3>
            <Table responsive>
              <tbody>
                <tr>
                  <td>Upstyle</td>
                  <td>starting at $50</td>
                </tr>
                <tr>
                  <td>Shampoo and Style</td>
                  <td>starting at $30</td>
                </tr>
                <tr>
                  <td>Flower Girl</td>
                  <td>starting at $30</td>
                </tr>
                <tr>
                  <td>Airbrush Make-Up</td>
                  <td>starting at $45</td>
                </tr>
                <tr>
                  <td>Make-Up</td>
                  <td>starting at $25</td>
                </tr>
              </tbody>
            </Table>
            <p>
              <Button bsStyle="primary">Button</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
        </Row>
      </Grid>
  );
  }
}

export default Wedding;

