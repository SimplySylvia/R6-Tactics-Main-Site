import React, {Component} from 'react'
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
import ProfileContainer from '../containers/ProfileContainer';
import { rcompareIdentifiers } from 'semver';


class Routes extends Component {
  render(){
    return(
      <Switch>
        <Route 
          exact 
          path='/' 
          render={(props) => (
            <Home/>)}
          />
        <Route
          path='/AttackOps' 
          render={(props) => (
            <AtkopsContainer/>)}
          />
        <Route 
          path='/DefenseOps' 
          render={(props) => (
            <DefopsContainer/>)}
          />
        <Route 
          path='/AttackOp/:name' 
          component={ AtkOpDetailContainer }
          />
        <Route 
          path='/DefenseOp/:name' 
          component={ DefOpDetailContainer }
          />
        <Route 
          path='/Maps' 
          component={ MapContainer }
          />
        <Route 
          path='/Map/:name' 
          component={ MapDetailContainer }
          />
        <Route 
          path='/profile/:name' 
          render={(props) => (
            <ProfileContainer 
              name={props.match.params.name}/>)}
          />
        <Route 
          path='/Strats' 
          component={ StratsContainer }
          />
        <Route 
          path='/Forum' 
          component={ ForumContainer }
          />
      </Switch>
    )
  }

}

export default Routes;