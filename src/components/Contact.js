import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button, HelpBlock, PageHeader,
         Grid, Row, Col } from 'react-bootstrap';
import GoogleMap from './GoogleMap';
import woman1 from '../images/fulls/woman1.png';
import woman2 from '../images/fulls/woman2.png';
import woman3 from '../images/fulls/woman3.png';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class Contact extends Component {
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
          <h1>Contact Us</h1>
          <Row>
            <Col xs={12} md={4}>
              <form>
                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Name"
                  placeholder="Enter name"
                />
                <FieldGroup
                  id="formControlsEmail"
                  type="email"
                  label="Email address"
                  placeholder="Enter email"
                />
                <FieldGroup
                  id="formControlsPassword"
                  label="Subject"
                  type="subject"
                />

                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Message</ControlLabel>
                  <FormControl componentClass="textarea" />
                </FormGroup>

                <Button type="submit">
                  Send
                </Button>
              </form>
            </Col>
            <Col xs={12} md={4}>
              <GoogleMap />
            </Col>
          </Row>
        </Grid>
        
      </div>
    );
  }
}

export default Contact;