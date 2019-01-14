import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {BASEPATH} from '../config/constants'

class Map extends Component {
  render(){
    const { coverimg, name, _id,} = this.props.map
    const mapimg = `${BASEPATH}${coverimg}`
    const link = `/Map/${name}`;
    let divStyle = {
      backgroundImage: `url(${mapimg})`
    };
    return(
      <div className="mapcard">
      <Link 
      to={{pathname: link, state: {mapid: `${_id}`}}} 
      > 
        <div className="mapcard" >
            <div className="flip">
              <div className="front" style={divStyle} >
              <h1 className="text-shadow">{name}</h1>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default Map