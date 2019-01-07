import React, {Component} from 'react';
import MapDetail from '../components/MapDetail'
import {BASEPATH} from '../config/constants'

class MapDetailContainer extends Component {
  constructor(){
    super()
    this.state = {
      map: [],
    }
  }
  

  componentDidMount = async() => {
    const id  = this.props.location.state.mapid;
    await fetch(`${BASEPATH}/api/smaps/${id}`)

    .then(response => response.json())
    .then(info => this.setState({map : [info.data]} ))
  }




  render(){
    let map = this.state.map.map( (map, i) => {
      return (
        <MapDetail
          map={map}
          key={i} />
      )
    })
    return(

  <div className="mapDetailContainer" >
  {map}

  </div>
  
    )
  }
}

export default MapDetailContainer