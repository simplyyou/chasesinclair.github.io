import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import { Grid, Row } from 'react-bootstrap';
import ImageWrapper from './ImageWrapper';
import seasonal2 from '../images/seasonal/seasonal2.jpg';
import seasonal8 from '../images/seasonal/seasonal8.jpg';
import seasonal9 from '../images/seasonal/seasonal9.jpg';
import seasonal11 from '../images/seasonal/seasonal11.jpg';
import deliver from '../images/interiors/deliver_items.png';
import Berries from '../images/seasonal/Berries.jpg';
import Christmas1 from '../images/seasonal/Christmas1.jpg';
import Christmas2 from '../images/seasonal/Christmas2.jpg';
import Keyholder from '../images/seasonal/Keyholder.jpg';
import SimplySign from '../images/seasonal/SimplySign.jpg';
import sister_naughty from '../images/seasonal/hi.png';
import Towels2 from '../images/gifts/Towels2.jpg';
import Towels3 from '../images/gifts/Towels3.jpg';
import NatureDecor from '../images/seasonal/NatureDecor.jpg';
import MerryChristmas from '../images/seasonal/MerryChristmas.jpg';
import Ornaments from '../images/seasonal/Ornaments.jpg';

class Seasonal extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <meta name="description" content="Simply You Seasonal Gifts paola Gift ideas Gift baskets Clocks Custom gifts Personalized gifts Panther gifts Paola High school gifts Paola Middle school gifts Christmas gifts paola Mothers day gifts paola Fathers day gifts paola Birthday gifts paola Shop local paola Gift cards paola Candles paola Picture frames paola Lamps paola Lanterns paola Interior design paola Kathy Kane Simply You Paola Park Square Lighting Edison bulbs Teenage rooms" />
            <meta name="robots" content="index,follow" />
            <title>Seasonal</title>
        </Helmet>
        <div className="title-border">
        <h2 className="p-centered">Simply You Seasonal</h2>
        <p className="p-centered">We have a large selection of inspiring looks for fall and Christmas. Give mantels, end tables, or any flat surface a quick fresh seasonal look with a sprinkling of autumn color and accent items. We have a wonderful selection of Christmas décor to bring joy to your home.</p>
        </div>
        <Grid className="container-fluid">
          <Row>
            <ImageWrapper image={sister_naughty} description={"242x200"} />
            <ImageWrapper image={deliver} description={"242x200"} />
            <ImageWrapper image={Ornaments} description={"242x200"} />
            <ImageWrapper image={Keyholder} description={"242x200"} />
            <ImageWrapper image={Towels3} description={"242x200"} />
            <ImageWrapper image={Berries} description={"242x200"} />
            <ImageWrapper image={Christmas1} description={"242x200"} />
            <ImageWrapper image={seasonal2} description={"242x200"} />
            <ImageWrapper image={seasonal11} description={"242x200"} />
            <ImageWrapper image={seasonal9} description={"242x200"} />
            <ImageWrapper image={seasonal8} description={"242x200"} />
            <ImageWrapper image={SimplySign} description={"242x200"} />
            <ImageWrapper image={Towels2} description={"242x200"} />
            <ImageWrapper image={Christmas2} description={"242x200"} />
            <ImageWrapper image={NatureDecor} description={"242x200"} />
            <ImageWrapper image={MerryChristmas} description={"242x200"} />
          </Row>
        </Grid>
      </div>
  );
  }
}

export default Seasonal;
