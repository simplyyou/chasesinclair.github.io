import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import interior1 from '../images/interiors/home_interior1.JPG';
import interior2 from '../images/interiors/home_interior2.JPG';
import interior3 from '../images/interiors/home_interior3.JPG';
import interior4 from '../images/interiors/interiors4.jpg';
import Flowers from '../images/interiors/Flowers.jpg';
import interior5 from '../images/interiors/interiors5.jpg';
import interior6 from '../images/interiors/interiors6.jpg';
import interior7 from '../images/interiors/interiors7.jpg';
import interior8 from '../images/interiors/interiors8.jpg';
import interior9 from '../images/interiors/interiors9.jpg';
import interior10 from '../images/interiors/interiors10.jpg';
import interior11 from '../images/interiors/interiors11.jpg';
import interior12 from '../images/interiors/interiors12.jpg';
import interior14 from '../images/interiors/interiors14.jpg';
import interior16 from '../images/interiors/interiors16.jpg';
import interior17 from '../images/interiors/interiors17.jpg';
import interior18 from '../images/interiors/interiors18.jpg';
import interior20 from '../images/interiors/interiors20.jpg';
import deliver from '../images/interiors/deliver_items.png';
import lantern4 from '../images/interiors/lantern4.jpg';
import lantern5 from '../images/interiors/lantern5.jpg';
import lantern6 from '../images/interiors/lantern6.jpg';
import lantern8 from '../images/interiors/lantern8.JPG';
import milk_can from '../images/interiors/milk_can.jpg';
import tins from '../images/interiors/tins.JPG';
import tins2 from '../images/interiors/tins2.jpg';
import vase from '../images/interiors/vase.jpg';
import wall_hanging from '../images/interiors/wall_hanging.JPG';
import wreath from '../images/interiors/wreath.jpg';
import candle_holders from '../images/interiors/candle_holders.jpg';
import door from '../images/interiors/door.JPG';
import frame from '../images/interiors/frame.jpg';
import clock from '../images/interiors/black and silver clock.JPG';
import heart from '../images/interiors/Key my heart.JPG';
import tray from '../images/interiors/live simply tray.JPG';
import metal_clock from '../images/interiors/metal clock.JPG';
import canister from '../images/interiors/Tin canister.JPG';
import wine_sign from '../images/interiors/wine is awesome sign.JPG';
import wood_and_metal_sign from '../images/interiors/wood and metal sign.JPG';
import wine_bottles from '../images/interiors/Wine_bottles.png';
import Bacon_Sign from '../images/interiors/Bacon_Sign.jpg';
import Berries from '../images/interiors/Berries.jpg';
import Cabinet from '../images/interiors/Cabinet.jpg';
import Cabinet2 from '../images/interiors/Cabinet(2).jpg';
import Clock2 from '../images/interiors/Clock2.jpg';
import CuttingBoard1 from '../images/interiors/CuttingBoard1.jpg';
import CuttingBoard2 from '../images/interiors/CuttingBoard2.jpg';
import cuttingboard3 from '../images/interiors/cuttingboard3.jpg';
import CuttingBoard5 from '../images/interiors/Cuttingboard5.jpg';
import Doorknobsign from '../images/interiors/Doorknobsign.jpg';
import EdisonLantern from '../images/interiors/EdisonLantern(1).jpg';
import EndTableDecor from '../images/interiors/EndTableDecor(1).jpg';
import endtabledecor2 from '../images/interiors/endtabledecor2.jpg';
import HangingLantern from '../images/interiors/HangingLantern.jpg';
import HangingLight from '../images/interiors/HangingLight.jpg';
import HangingRack from '../images/interiors/HangingRack(1).jpg';
import KitchenRack from '../images/interiors/KitchenRack(1).jpg';
import Mirror from '../images/interiors/Mirror.jpg';
import Mirror2 from '../images/interiors/Mirror2.jpg';
import PillowandDecanter from '../images/interiors/PillowandDecanter.jpg';
import Pillows from '../images/interiors/Pillows.jpg';
import Pumpkin4 from '../images/interiors/Pumpkin4(1).jpg';
import Rooster from '../images/interiors/Rooster1.jpg';
import Winemakingmeawesome from '../images/interiors/Winemakingmeawesome.jpg';
import WoodenTray from '../images/interiors/WoodenTray(1).jpg';
import CabinetLantern from '../images/gifts/HangingLantern.jpg';
import wine_pillows from '../images/interiors/Wine_pillows.png';

class Interiors extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <meta name="description" content="Simply You Interiors Gifts paola Gift ideas paola Gift baskets paola Clocks paola Custom gifts Personalized gifts paola Paola Panther gifts Paola High school gifts Paola Middle school gifts Christmas gifts paola Mothers day gifts Fathers day gifts paola Birthday gifts paola Shop local paola Gift cards paola Candles paola Picture frames Lamps Lanterns Interior design Kathy Kane Simply You Paola Park Square Lighting Edison bulbs Teenage rooms" />
            <meta name="robots" content="index,follow" />
            <title>Interiors</title>
        </Helmet>
        <div className="title-border">
        <h2 className="p-centered">Simply You Interiors</h2>
        <p className="p-centered">Simply You is situated on the historic park square in Paola. We get new items in weekly so you are sure to find something unique and different each time you visit. Our home interiors collection includes items for each room in your home. We carry items that are timeless and well and some of the latest trends. We are excited to be able to share our love for decorating with you.</p>
        </div>
        <Grid className="container-fluid">
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src={wine_bottles} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={deliver} alt="Interiors">
              </Thumbnail>
            </Col>
              <Col xs={6} md={4}>
                <Thumbnail src={Rooster} alt="Interiors">
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail src={Pumpkin4} alt="Interiors">
                </Thumbnail>
              </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={KitchenRack} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={HangingLantern} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={endtabledecor2} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={EdisonLantern} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={Doorknobsign} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={CabinetLantern} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={Cabinet2} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={Cabinet} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={Berries} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={Bacon_Sign} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={interior1} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={interior3} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={interior4} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={Flowers} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={interior5} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={interior6} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={interior7} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={interior8} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={interior9} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={interior10} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={interior2} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={interior18} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={door} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={interior16} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={lantern8} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={milk_can} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={tins} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={clock} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={wood_and_metal_sign} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={canister} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={interior12} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={interior11} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={interior14} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={interior20} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={interior17} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={lantern4} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={lantern5} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={lantern6} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={candle_holders} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={tins2} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={vase} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={wall_hanging} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={wreath} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={frame} alt="Interiors">
              </Thumbnail>
            </Col>

            <Col xs={6} md={4}>
              <Thumbnail src={heart} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={tray} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={metal_clock} alt="Interiors">
              </Thumbnail>
            </Col>

            <Col xs={6} md={4}>
              <Thumbnail src={wine_sign} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={wine_pillows} alt="Interiors">
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
               <Thumbnail src={Pillows} alt="Interiors">
               </Thumbnail>
             </Col>
             <Col xs={6} md={4}>
               <Thumbnail src={Winemakingmeawesome} alt="Interiors">
               </Thumbnail>
             </Col>
             <Col xs={6} md={4}>
               <Thumbnail src={WoodenTray} alt="Interiors">
               </Thumbnail>
             </Col>
             <Col xs={6} md={4}>
               <Thumbnail src={Mirror2} alt="Interiors">
               </Thumbnail>
             </Col>
             <Col xs={6} md={4}>
               <Thumbnail src={PillowandDecanter} alt="Interiors">
               </Thumbnail>
             </Col>
             <Col xs={6} md={4}>
               <Thumbnail src={Mirror} alt="Interiors">
               </Thumbnail>
             </Col>
             <Col xs={6} md={4}>
               <Thumbnail src={HangingRack} alt="Interiors">
               </Thumbnail>
             </Col>
             <Col xs={6} md={4}>
               <Thumbnail src={HangingLight} alt="Interiors">
               </Thumbnail>
             </Col>
             <Col xs={6} md={4}>
               <Thumbnail src={EndTableDecor} alt="Interiors">
               </Thumbnail>
             </Col>
             <Col xs={6} md={4}>
               <Thumbnail src={CuttingBoard5} alt="Interiors">
               </Thumbnail>
             </Col>
             <Col xs={6} md={4}>
               <Thumbnail src={cuttingboard3} alt="Interiors">
               </Thumbnail>
             </Col>
             <Col xs={6} md={4}>
               <Thumbnail src={CuttingBoard1} alt="Interiors">
               </Thumbnail>
             </Col>
             <Col xs={6} md={4}>
               <Thumbnail src={CuttingBoard2} alt="Interiors">
               </Thumbnail>
             </Col>
             <Col xs={6} md={4}>
               <Thumbnail src={Clock2} alt="Interiors">
               </Thumbnail>
             </Col>
          </Row>
        </Grid>
      </div>
  );
  }
}

export default Interiors;
