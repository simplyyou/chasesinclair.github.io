import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import furniture from '../images/fulls/furniture.jpg';
import furniture2 from '../images/fulls/furniture2.jpg';
import wine from '../images/fulls/wine_glass.jpg';
import table from '../images/fulls/table.jpg';
import welcome from '../images/fulls/welcome-to-our-home.jpg';

class CarouselX extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img alt="900x500" src={furniture}/>
            <Carousel.Caption>
              <h3>Quality Experience</h3>
              <p>Located on the historic park square of Paola, Simply You offers an experience like no other. We are a full-service salon and our professional staff are dedicated to providing you with the service and personalized treatment you deserve. Whether you are looking for a new look, have a special event, or just want a day for yourself, Simply You is certain to make you feel right at home every time.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img alt="900x500" src={furniture2}/>
            <Carousel.Caption>
              <h3>Services</h3>
              <p>Services include: Hair Styling, Custom Hair Coloring, Nails, Facials, Waxing, Skincare, Makeup.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img alt="900x500" src={wine}/>
            <Carousel.Caption>
              <h3>Check it out</h3>
              <p>Need a gift or something new for the season? From scarfs and purses to jewelry and make-up, come and find that trendy or new accessory for you or someone special.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img alt="900x500" src={table}/>
            <Carousel.Caption>
              <h3>Gift Cards</h3>
              <p>Simply You gift cards and special packages make excellent gifts!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img alt="900x500" src={welcome}/>
            <Carousel.Caption>
              <h3>Slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CarouselX;



