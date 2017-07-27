import React, { Component } from 'react';
import Navigation from './components/Navigation';
import CarouselX from './components/CarouselX';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <CarouselX />
        <Footer />
      </div>
    );
  }
}

export default App;