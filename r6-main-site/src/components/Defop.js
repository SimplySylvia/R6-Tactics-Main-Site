import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Defop extends Component {

  render(){
    const link = `/DefenseOp/${this.props.defop.name}`;
    return(
      
  <div className="wrapper">
  {/* card for op details */}
  <Link 
  to={{pathname: link, state: {opid: `${this.props.defop._id}`}}} 
  > 
    <div className="op-card">
      <div className="op-card__image op-card__image">
        <img src={`http://localhost:8000${this.props.defop.img}`} alt={`${this.props.defop.name}`} />
      </div>
      <div className="op-card__level op-card__level"></div>
      <div className="op-card__unit-name">{this.props.defop.name}</div>
      {/* area to describe unique gadget */}
      <div className="op-card__unit-description">
      <div className="op-card__gadget-title">Unique Gadget</div>
      <img className="one-half" src={`http://localhost:8000${this.props.defop.badge}`} alt={`${this.props.defop.name}`}/>
      <ul className="one-half gadget-name">
        <li>{this.props.defop.gadget.name}</li>
      </ul>
      </div>
    </div>
    </Link> {/*   end of card */}
  </div>
  
    )
  }
}

export default Defop