import React, { Component } from 'react';
import ServiceTable from './ServiceTable';
import thumb5 from '../images/thumbs/05.jpg';
import thumb6 from '../images/thumbs/06.jpg';
import thumb7 from '../images/thumbs/07.jpg';
         
const HAIR_SERVICES = [
  {category: 'Hair', price: 'Starting at $30', name: 'Womens Haircuts'},
  {category: 'Hair', price: 'Starting at $18', name: 'Boys Haircuts'},
  {category: 'Hair', price: 'Starting at $16', name: 'Childrens Haircuts'},
  {category: 'Hair', price: 'Starting at $20', name: 'Teenage Girls Haircuts'},
  {category: 'Hair', price: 'Starting at $20', name: 'Shampoo and Blow Dry'},
  {category: 'Hair', price: 'Starting at $50', name: 'Color'},
  {category: 'Hair', price: 'Starting at $65', name: 'Full Foil'},
  {category: 'Hair', price: 'Starting at $55', name: 'Partial Foil'},
  {category: 'Hair', price: 'Starting at $45', name: 'Up dos'},
  {category: 'Hair', price: 'Starting at $60', name: 'Perm'}
];
const FACE_SERVICES = [
  {category: 'Facials & Waxing', price: 'Starting at $15', name: 'Brow Wax'},
  {category: 'Facials & Waxing', price: 'Starting at $10', name: 'Lip Wax'},
  {category: 'Facials & Waxing', price: 'Starting at $10', name: 'Nose Wax'},
  {category: 'Facials & Waxing', price: 'Starting at $10', name: 'Chin Wax'},
  {category: 'Facials & Waxing', price: 'Starting at $35', name: 'Full Face Wax'},
  {category: 'Facials & Waxing', price: 'Starting at $35', name: 'Bikini Wax'},
  {category: 'Facials & Waxing', price: 'Starting at $50', name: 'Facials'},
  {category: 'Facials & Waxing', price: 'Starting at $20', name: 'Facial Peel'},
  {category: 'Facials & Waxing', price: 'Starting at $5', name: 'Paraffin Dip'}
];
const SKIN_SERVICES = [
  {category: 'Skincare & Makeup', price: 'Starting at $30', name: 'Skin Product #1'},
  {category: 'Skincare & Makeup', price: 'Starting at $18', name: 'Skin Product #2'},
  {category: 'Skincare & Makeup', price: 'Starting at $16', name: 'Skin Product #3'}
];

class Services extends Component {
  render() {
    return (
      <div className="container">
        <div className="span12">
          <ServiceTable services={HAIR_SERVICES} image={thumb5}/>
          <ServiceTable services={FACE_SERVICES} image={thumb6}/>
          <ServiceTable services={SKIN_SERVICES} image={thumb7}/>
        </div>
      </div>
  );
  }
}

export default Services;

