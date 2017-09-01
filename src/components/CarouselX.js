import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import grand from '../images/new_grand_reopening.png';

class CarouselX extends Component {

  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="img-carousel" alt="Grand Reopening" src={grand}/>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CarouselX;



