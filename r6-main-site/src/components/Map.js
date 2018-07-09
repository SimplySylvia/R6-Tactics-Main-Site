import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Map extends Component {
  

  render(){
    const mapimg = `http://localhost:8000${this.props.map.coverimg}`
    const link = `/Map/${this.props.map.name}`;
    console.log(`here is the map id`,this.props.map._id);
    var divStyle = {
      backgroundImage: `url(${mapimg})`
    };

    return(

  <div className="mapcard">
  {/* card for op details */}
  <Link 
  to={{pathname: link, state: {mapid: `${this.props.map._id}`}}} 
  > 
    <div className="mapcard" >
        <div className="flip">
          <div className="front" style={divStyle} >
           <h1 className="text-shadow">{this.props.map.name}</h1>
          </div>
        </div>
      </div>
    </Link>{/*   end of card */}
  </div>
  
    )
  }
}

export default Map