import React, {Component} from 'react';
import MapDetail from '../components/MapDetail'

class MapDetailContainer extends Component {
  constructor(){
    super()
    this.state = {
      map: [],
    }
  }
  

  componentDidMount = async() => {
    const id  = this.props.location.state.mapid;
    console.log(`here is the id`, id)
    await fetch 
    (`http://localhost:8000/api/smaps/${id}`)

    .then(response => response.json())
    .then(info => this.setState({map : [info.data]} ))
    
    console.log('here is the state of the map',this.state.map);
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