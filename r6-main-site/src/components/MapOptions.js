import React, {Component} from 'react';
import { Button, Dropdown } from 'semantic-ui-react';
import FloorButtons from './FloorButtons';
import BombButtons from './BombButtons';
import SecureButtons from './SecureButtons';


class MapOptions extends Component {
  
  render(){

    console.log(`here is a prop:`, this.props.map);

    // gather atkspawns and generate drop down
    const atkspawns = Object.values(this.props.map.atkspawns);
    const atkOptions = [];
    const createSpawnObject = atkspawns.map((atkspawn)=>{
      atkOptions.push(
          {
            text: atkspawn,
            value: atkspawn,
          }
      )
    });

    // gather secure area locations and genreate options
    const salocations = Object.values(this.props.map.securearea);
    const saOptions = [];
    const createSaObject = salocations.map((salocation)=>{
      saOptions.push(
          {
            text: salocation,
            value: salocation,
          }
      )
    });

    // gather hostage info and create dropdown
    const hoslocations = Object.values(this.props.map.hostage);
    const hosOptions = [];
    const createhosObject = hoslocations.map((hoslocation)=>{
      hosOptions.push(
          {
            text: hoslocation,
            value: hoslocation,
          }
      )
    });


    return(
      <section className='mapOptions'>
        <h1>Floors</h1>
        <FloorButtons floors={this.props.map.floors} selectedFloor={this.props.selectedFloor} onSelectFloor={this.props.onSelectFloor}/>
        <h1>Bomb Locations</h1>
        <BombButtons bombs={this.props.map.bombsites} selectedBomb={this.props.selectedBomb} onSelectBomb={this.props.onSelectBomb}/>
        <h1>Secure Area</h1>
        <SecureButtons secureareas={this.props.map.securearea} selectedSecure={this.props.selectedSecure} onSelectSecure={this.props.onSelectSecure}/>
        <h1>Hostage</h1>
        <div className='hosLocations'>
        <Dropdown className='hosDropDown' placeholder='Select Location' fluid selection options={hosOptions} />
        </div>
        <h1>Attack Spawns</h1>
        <div className='atkLocations'>
        <Dropdown className='atkDropDown' placeholder='Select Location' fluid selection options={atkOptions} />
        </div>
      </section>
    )
  }
}


export default MapOptions