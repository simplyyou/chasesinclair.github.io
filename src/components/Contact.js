import React, { Component } from 'react';
import { FormGroup, Checkbox, Radio, ControlLabel, FormControl, Button, HelpBlock, PageHeader,
         Grid, Row, Col } from 'react-bootstrap';
import furniture from '../images/fulls/furniture.jpg';

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
        <PageHeader>Contact Us</PageHeader>
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <img src={furniture} className="img-circle" alt="Cinque Terre" width="250" height="250"></img>
              <h3>Kathy Kane</h3>
              <p>Description</p>
            </Col>
            <Col xs={6} md={4}>
              <img src={furniture} className="img-circle" alt="Cinque Terre" width="250" height="250"></img>
              <h3>Sarah Jahde Fulk</h3>
              <p>Description</p>
            </Col>
            <Col xs={6} md={4}>
              <img src={furniture} className="img-circle" alt="Cinque Terre" width="250" height="250"></img>
              <h3>Megan Stallbaumer</h3>
              <p>Description</p>
            </Col>
            <Col xs={6} md={4}>
              <img src={furniture} className="img-circle" alt="Cinque Terre" width="250" height="250"></img>
              <h3>Amber Putnam</h3>
              <p>Description</p>
            </Col>
            <Col xs={6} md={4}>
              <img src={furniture} className="img-circle" alt="Cinque Terre" width="250" height="250"></img>
              <h3>Hillary Foltz</h3>
              <p>Description</p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
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
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Contact;