import React, { Component } from 'react';
import { Media, Table } from 'react-bootstrap';
import thumb5 from '../images/thumbs/05.jpg';
import thumb6 from '../images/thumbs/06.jpg';
import thumb7 from '../images/thumbs/07.jpg';
import { WOMENS_HAIRCUTS, BOYS_HAIRCUTS, CHILDRENS_HAIRCUTS, HAIR_DESCRIPTION, FACIALS_DESCRIPTION, MAKEUP_DESCRIPTION,
         STARTING_AT_16, STARTING_AT_18, STARTING_AT_30, HAIR, FACIALS_AND_WAXING, SKINCARE_AND_MAKEUP } from '../utils/constants.js';

class Service extends Component {
  render() {
    return (
      <div className="container">
        <div className="span12">
          <Media>
           <Media.Left>
              <img width={64} height={64} src={thumb5} alt="Image"/>
            </Media.Left>
            <Media.Body>
              <Media.Heading>{HAIR}</Media.Heading>
              <p>{HAIR_DESCRIPTION}</p>
              <Table responsive>
                <tbody>
                  <tr>
                    <td>{WOMENS_HAIRCUTS}</td>
                    <td>{STARTING_AT_30}</td>
                  </tr>
                  <tr>
                    <td>{BOYS_HAIRCUTS}</td>
                    <td>{STARTING_AT_18}</td>
                  </tr>
                  <tr>
                    <td>{CHILDRENS_HAIRCUTS}</td>
                    <td>{STARTING_AT_16}</td>
                  </tr>
                </tbody>
              </Table>
            </Media.Body>
          </Media>
          <Media>
            <Media.Left>
              <img width={64} height={64} src={thumb6} alt="Image"/>
            </Media.Left>
            <Media.Body>
              <Media.Heading>{FACIALS_AND_WAXING}</Media.Heading>
              <p>{FACIALS_DESCRIPTION}</p>
            </Media.Body>
          </Media>
          <Media>
            <Media.Left>
              <img width={64} height={64} src={thumb7} alt="Image"/>
            </Media.Left>
            <Media.Body>
              <Media.Heading>{SKINCARE_AND_MAKEUP}</Media.Heading>
              <p>{MAKEUP_DESCRIPTION}</p>
            </Media.Body>
          </Media>
        </div>
      </div>
  );
  }
}

export default Service;

