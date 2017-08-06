import React, { Component } from 'react';
import CarouselX from './CarouselX';
import GridLayout from './GridLayout';

class Home extends Component {
  render() {
    return (
      <div>
        <CarouselX />
        <GridLayout />
      </div>
    );
  }
}

export default Home;