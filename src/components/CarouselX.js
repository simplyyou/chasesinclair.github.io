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
import CandleHolderHomepage from '../images/home/CandleHoldersHomepage.jpg';
import CuttingBoard1 from '../images/home/CuttingBoard1.jpg';
import CuttingBoard2 from '../images/home/CuttingBoard2.jpg';
import EndTableDecor from '../images/home/EndTableDecor.jpg';
import MerryChristmasSign from '../images/home/MerryChristmasSign.jpg';
import PillowandDecanter from '../images/home/PillowandDecanter.jpg';
import Purse3b from '../images/home/Purse3b.jpg';
import Train from '../images/home/Train.jpg';
import ChirstmasOpenHouse from '../images/home/ChirstmasOpenHouse.png';
import Towels2 from '../images/home/Towels2.jpg';


class CarouselX extends Component {

  render() {
    return (
      <div>
        <Carousel>
        <Carousel.Item>
          <img className="img-carousel" alt="Open House" src={ChirstmasOpenHouse}/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-carousel" alt="Towels" src={Towels2}/>
        </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Pumpkin" src={pumpkin}/>
            <Carousel.Caption>
              <h3>Add character with this fall pumpkin!</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Candle Holder" src={CandleHolderHomepage}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Cutting Board" src={CuttingBoard1}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Cutting Board" src={CuttingBoard2}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Table Decor" src={EndTableDecor}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Merry Christmas Sign" src={MerryChristmasSign}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Pillows" src={PillowandDecanter}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Purse" src={Purse3b}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Trains" src={Train}/>
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
              <h3>Add autumn colors with leaves and grasses.</h3>
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
