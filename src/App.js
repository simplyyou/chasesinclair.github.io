import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Layout from './components/Layout';
import CarouselX from './components/CarouselX';
import GridLayout from './components/GridLayout';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <CarouselX />
      </div>
    );
  }
}

export default App;