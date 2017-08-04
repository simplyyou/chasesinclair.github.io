import React, { Component } from 'react';
import Home from './Home';
import GridLayout from './GridLayout';
import Decor from './Decor';
import Services from './Services';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/service' component={Services}/>
          <Route path='/stuff' component={GridLayout}/>
          <Route path='/decor' component={Decor}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </div>
    );
  }
}

export default Main;