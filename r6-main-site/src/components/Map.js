import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Map extends Component {
  

  render(){
    const { coverimg, name, _id,} = this.props.map
    const mapimg = `http://localhost:8000${coverimg}`
    const link = `/Map/${name}`;
    console.log(`here is the map id`,_id);
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