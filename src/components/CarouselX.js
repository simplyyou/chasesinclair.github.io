import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import furniture from '../images/fulls/furniture.jpg';
import furniture2 from '../images/fulls/furniture2.jpg';
import wine from '../images/fulls/wine_glass.jpg';
import table from '../images/fulls/table.jpg';
import welcome from '../images/fulls/welcome-to-our-home.jpg';
import grand from '../images/grand_reopening.jpg';

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



