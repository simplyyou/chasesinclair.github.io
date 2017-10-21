import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import dog_frame from '../images/gifts/frame_dog_accent.JPG';
import frames from '../images/gifts/frames.jpg';
import initial_necklaces from '../images/gifts/initial_necklaces.JPG';
import small_frame from '../images/gifts/small_frame.JPG';
import tea_towel_happily from '../images/gifts/tea_towel_happily.JPG';
import tea_towel_looking_good from '../images/gifts/tea_towel_looking_good.JPG';
import tea_towel_mon_tues from '../images/gifts/tea_towel_mon_tues.jpg';
import tea_towel_outdoorsy from '../images/gifts/tea_towel_outdoorsy.JPG';
import tea_towel_teaching from '../images/gifts/tea_towel_teaching.JPG';
import tea_towel_pilates from '../images/gifts/tea_towel_pilates.JPG';
import deliver from '../images/interiors/deliver_items.png';


class Gifts extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <meta name="description" content="Simply You Gifts paola Gift ideas Gift baskets Clocks paola Custom gifts Personalized gifts Panther gifts Paola High school gifts Paola Middle school gifts Christmas gifts Mothers day gifts Fathers day gifts Birthday gifts Shop local Gift cards paola Candles paola Picture frames paola Lamps paola Lanterns paola Interior design paola Kathy Kane Simply You Paola Park Square Lighting Edison bulbs Teenage rooms Jewelry" />
            <meta name="robots" content="index,follow" />
            <title>Gifts</title>
        </Helmet>
        <div className="title-border">
        <h2 className="p-centered">Simply You Gifts</h2>
        <p className="p-centered">Let us help you with just the right item for a gift whether it’s for a friend or family member or for a special occasion such as a birthday or Christmas present. We have many budget friendly items such as one of a kind picture frames, inspiring and whimsical kitchen towels, to trendy Edison lighting for any room of the house including those teenager bedrooms!</p>
        </div>
        <Grid className="container-fluid">
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src={dog_frame} alt="242x200">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={deliver} alt="242x200">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={small_frame} alt="242x200">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={tea_towel_happily} alt="242x200">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={tea_towel_looking_good} alt="242x200">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={tea_towel_teaching} alt="242x200">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={tea_towel_pilates} alt="242x200">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={tea_towel_outdoorsy} alt="242x200">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={initial_necklaces} alt="242x200">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={tea_towel_mon_tues} alt="242x200">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={frames} alt="242x200">
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </div>
  );
  }
}

export default Gifts;
