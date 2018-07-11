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
        selectedFloor={this.props.selectedFloor}
        />
      </div>
      </section>
    )
  }
}


export default MapViewer