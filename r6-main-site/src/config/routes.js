import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import OpsContainer from '../containers/OpsContainer';

export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/ops' component={ OpsContainer }/>
  </Switch>
)