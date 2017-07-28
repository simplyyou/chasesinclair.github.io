import React, { Component } from 'react';
import Home from './Home';
import Layout from './Layout';
import Wedding from './Wedding';
import Services from './Services';
import { Switch, Route } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/service' component={Services}/>
          <Route path='/stuff' component={Layout}/>
          <Route path='/wedding' component={Wedding}/>
        </Switch>
      </div>
    );
  }
}

export default Main;