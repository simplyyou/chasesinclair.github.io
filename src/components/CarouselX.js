import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import fullimage5 from '../images/fulls/05.jpg';
import fullimage6 from '../images/fulls/06.jpg';
import fullimage7 from '../images/fulls/07.jpg';
import fullimage8 from '../images/fulls/08.jpg';
import fullimage9 from '../images/fulls/09.jpg';
import fullimage10 from '../images/fulls/10.jpg';
import fullimage11 from '../images/fulls/11.jpg';
import fullimage12 from '../images/fulls/12.jpg';

class CarouselX extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img alt="900x500" src={fullimage5}/>
          <Carousel.Caption>
            <h3>Quality Experience</h3>
            <p>Located on the historic park square of Paola, Simply You offers an experience like no other. We are a full-service salon and our professional staff are dedicated to providing you with the service and personalized treatment you deserve. Whether you are looking for a new look, have a special event, or just want a day for yourself, Simply You is certain to make you feel right at home every time.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="900x500" src={fullimage6}/>
          <Carousel.Caption>
            <h3>Services</h3>
            <p>Services include: Hair Styling, Custom Hair Coloring, Nails, Facials, Waxing, Skincare, Makeup.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="900x500" src={fullimage7}/>
          <Carousel.Caption>
            <h3>Check it out</h3>
            <p>Need a gift or something new for the season? From scarfs and purses to jewelry and make-up, come and find that trendy or new accessory for you or someone special.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="900x500" src={fullimage8}/>
          <Carousel.Caption>
            <h3>Gift Cards</h3>
            <p>Simply You gift cards and special packages make excellent gifts!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="900x500" src={fullimage9}/>
          <Carousel.Caption>
            <h3>Slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="900x500" src={fullimage10}/>
          <Carousel.Caption>
            <h3>Slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="900x500" src={fullimage11}/>
          <Carousel.Caption>
            <h3>Slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="900x500" src={fullimage12}/>
          <Carousel.Caption>
            <h3>Slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselX;



