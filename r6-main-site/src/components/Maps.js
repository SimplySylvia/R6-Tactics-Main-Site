import React, {Component} from 'react'
import Map from './Map'

class Maps extends Component {
  render(){
    let maps = this.props.maps.map( (map, i) => {
      return (
        <Map
          map={map}
          key={i} />
      )
    })
    
    return(
      <div className="maps">
      <div className="mapHeader">
      <h3>Maps</h3>
      </div>
      
      <div className="mapList">
      <div className="maps">
        {maps}
        </div>
        </div>
      </div>
    )
  }
}

export default Maps