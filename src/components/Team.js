import React, { Component } from 'react';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';
import woman1 from '../images/fulls/woman1.png';
import woman2 from '../images/fulls/woman2.png';
import woman3 from '../images/fulls/woman3.png';

class Team extends Component {
  render() {
    return (
      <div>
        <PageHeader>Simply You Team Members</PageHeader>
        <Grid>
          <Row>
            <Col xs={12} md={4}>
              <img src={woman1} className="img-circle" alt="Cinque Terre"></img>
              <h3>Kathy Kane</h3>
              <p>Owner & American Board Certified Haircolorist</p>
            </Col>
            <Col xs={12} md={4}>
              <img src={woman2} className="img-circle" alt="Cinque Terre"></img>
              <h3>Jenifer Darling</h3>
              <p>Hairstylist</p>
            </Col>
            <Col xs={12} md={4}>
              <img src={woman3} className="img-circle" alt="Cinque Terre"></img>
              <h3>Mary Green</h3>
              <p>Receptionist</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Team;