import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import candle_holders from '../images/home/candle_holders.jpg';
import interiors15 from '../images/home/interiors15.jpg';
import interiors17 from '../images/home/interiors17.jpg';
import lantern5 from '../images/home/lantern5.jpg';
import lantern6 from '../images/home/lantern6.jpg';
import tins1 from '../images/home/tins1.jpg';
import vase from '../images/home/vase.jpg';
import frame from '../images/home/frame.jpg';
import pumpkin from '../images/home/Pumpkin_Home_Page.png';

class CarouselX extends Component {

  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="img-carousel" alt="Candle Holders" src={pumpkin}/>
            <Carousel.Caption>
              <h3>Add color and texture with this fall pumpkin.</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Candle Holders" src={candle_holders}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Interiors" src={interiors15}/>
            <Carousel.Caption>
              <h3>Come see our new fall collection of home décor!</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Interiors" src={interiors17}/>
            <Carousel.Caption>
              <h3>Add fall colors with leaves and grasses.</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Lantern" src={lantern5}/>
            <Carousel.Caption>
              <h3>We have a variety of lanterns that are perfect for decorating.</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Lantern" src={lantern6}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Tins" src={tins1}/>
            <Carousel.Caption>
              <h3>Rustic tins add character to any surface.</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Vase" src={vase}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Frame" src={frame}/>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CarouselX;
