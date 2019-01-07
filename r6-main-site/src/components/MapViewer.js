import React, {Component} from 'react';
import GoogleMapComp from './GoogleMapComp'
import {BASEPATH} from '../helper.js'

class MapViewer extends Component {
  
  render(){
    const floorimg = `${BASEPATH}${this.props.selectedFloor.img}`
    return(
      <section className='mapViewer'>
        <div className='map'>
        <GoogleMapComp
        map={this.props.map}
        selectedFloor={this.props.selectedFloor}
        canDraw={this.props.canDraw}
        selectedColor={this.props.selectedColor}
        selectedBomb={this.props.selectedBomb}
        selectedSecure={this.props.selectedSecure}
        selectedAtk={this.props.selectedAtk}
        selectedHostage={this.props.selectedHostage}
        />
      </div>
      </section>
    )
  }
}


export default MapViewer