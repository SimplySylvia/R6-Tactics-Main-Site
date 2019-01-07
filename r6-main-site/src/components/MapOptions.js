import React, {Component} from 'react';
import FloorButtons from './FloorButtons';
import BombButtons from './BombButtons';
import SecureButtons from './SecureButtons';
import HostageButtons from './HostageButtons';
import AtkButtons from './AtkButtons';


class MapOptions extends Component {
  
  render(){
    return(
      <section className='mapOptions'>
        <h1>Floors</h1>
        <FloorButtons floors={this.props.map.floors} selectedFloor={this.props.selectedFloor} onSelectFloor={this.props.onSelectFloor}/>
        <h1>Bomb Locations</h1>
        <BombButtons bombs={this.props.map.bombsites} selectedBomb={this.props.selectedBomb} onSelectBomb={this.props.onSelectBomb}/>
        <h1>Secure Area</h1>
        <SecureButtons secureareas={this.props.map.securearea} selectedSecure={this.props.selectedSecure} onSelectSecure={this.props.onSelectSecure}/>
        <h1>Hostage</h1>
        <HostageButtons hostages={this.props.map.hostage} selectedHostage={this.props.selectedHostage} onSelectHostage={this.props.onSelectHostage}/>
        <h1>Attack Spawns</h1>
        <AtkButtons atks={this.props.map.atkspawns} selectedAtk={this.props.selectedAtk} onSelectAtk={this.props.onSelectAtk}/>
      </section>
    )
  }
}


export default MapOptions