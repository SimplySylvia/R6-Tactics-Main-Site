import React, {Component} from 'react';

class MapViewer extends Component {


  render(){

    return(
      <section className='mapViewer'>
        <div>
          <h1>I AM MAP {this.props.map.name}</h1>
          </div>
      </section>
    )
  }
}


export default MapViewer