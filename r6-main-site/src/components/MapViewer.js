import React, {Component} from 'react';

class MapViewer extends Component {


  render(){
    const floorimg = `http://localhost:8000${this.props.selectedFloor.img}`
    console.log("VIEWER: ", this.props.selectedFloor)
    return(
      <section className='mapViewer'>
        <div className='map'>
          <img src={floorimg}/>
          </div>
      </section>
    )
  }
}


export default MapViewer