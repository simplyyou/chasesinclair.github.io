import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { loadAssets } from '../utils/asset_loader';

class CarouselX extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentWillMount() {
    let urls = [];
    loadAssets(urls)
    .then(() => {
      this.setState({
        data: urls
      });
    });
  }

  render() {
    if (!this.state.data) {
      return <div />
    }
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img alt="900x500" src={this.state.data[0]}/>
            <Carousel.Caption>
              <h3>Quality Experience</h3>
              <p>Located on the historic park square of Paola, Simply You offers an experience like no other. We are a full-service salon and our professional staff are dedicated to providing you with the service and personalized treatment you deserve. Whether you are looking for a new look, have a special event, or just want a day for yourself, Simply You is certain to make you feel right at home every time.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img alt="900x500" src={this.state.data[1]}/>
            <Carousel.Caption>
              <h3>Services</h3>
              <p>Services include: Hair Styling, Custom Hair Coloring, Nails, Facials, Waxing, Skincare, Makeup.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img alt="900x500" src={this.state.data[2]}/>
            <Carousel.Caption>
              <h3>Check it out</h3>
              <p>Need a gift or something new for the season? From scarfs and purses to jewelry and make-up, come and find that trendy or new accessory for you or someone special.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img alt="900x500" src={this.state.data[3]}/>
            <Carousel.Caption>
              <h3>Gift Cards</h3>
              <p>Simply You gift cards and special packages make excellent gifts!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img alt="900x500" src={this.state.data[4]}/>
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



