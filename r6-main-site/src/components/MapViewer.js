import React, {Component} from 'react';
import GoogleMapComp from './GoogleMapComp'

class MapViewer extends Component {
  
  render(){
    const floorimg = `http://localhost:8000${this.props.selectedFloor.img}`
    console.log("VIEWER: ", this.props.selectedFloor)
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