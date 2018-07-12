import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import AtkopsContainer from '../containers/AtkopsContainer';
import DefopsContainer from '../containers/DefopsContainer';
import AtkOpDetailContainer from '../containers/AtkOpDetailContainer';
import DefOpDetailContainer from '../containers/DefOpDetailContainer';
import MapContainer from '../containers/MapContainer';
import MapDetailContainer from '../containers/MapDetailContainer';
import StratsContainer from '../containers/StratsContainer';
import ForumContainer from '../containers/ForumContainer';

export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
      <Route path='/AttackOps' component={ AtkopsContainer }/>
      <Route path='/DefenseOps' component={ DefopsContainer }/>
      <Route path='/AttackOp/:name' component={ AtkOpDetailContainer }/>
      <Route path='/DefenseOp/:name' component={ DefOpDetailContainer }/>
      <Route path='/Maps' component={MapContainer}/>
      <Route path='/Map/:name' component={MapDetailContainer}/>
      <Route path='/Strats' component={StratsContainer}/>
      <Route path='/Forum' component={ForumContainer}/>
  </Switch>
)