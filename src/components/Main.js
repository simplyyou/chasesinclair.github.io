import React, { Component } from 'react';
import Home from './Home';
import GridLayout from './GridLayout';
import Layout from './Layout';
import { Switch, Route } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/service' component={GridLayout}/>
          <Route path='/stuff' component={Layout}/>
        </Switch>
      </div>
    );
  }
}

export default Main;