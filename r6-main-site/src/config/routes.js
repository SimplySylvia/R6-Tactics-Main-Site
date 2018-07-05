import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import AtkopsContainer from '../containers/AtkopsContainer';
import DefopsContainer from '../containers/DefopsContainer';

export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/AttackOps' component={ AtkopsContainer }/>
    <Route path='/DefenseOps' component={ DefopsContainer }/>
  </Switch>
)