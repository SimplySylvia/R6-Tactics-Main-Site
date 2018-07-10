import React, {Component} from 'react';

class MapViewer extends Component {


  render(){
    console.log("VIEWER: ", this.props.selectedFloor)
    return(
      <section className='mapViewer'>
        <div>
          <h1>I AM MAP {this.props.map.name}</h1>
          <h1>We are seeing {this.props.selectedFloor.name}</h1>
          </div>
      </section>
    )
  }
}


export default MapViewer