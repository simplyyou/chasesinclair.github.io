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

class CarouselX extends Component {

  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="img-carousel" alt="Candle Holders" src={candle_holders}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Interiors" src={interiors15}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Interiors" src={interiors17}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Lantern" src={lantern5}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Lantern" src={lantern6}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Tins" src={tins1}/>
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
