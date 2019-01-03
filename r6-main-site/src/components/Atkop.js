import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Atkop extends Component {
  render(){
    const link = `/AttackOp/${this.props.atkop.name}`;
    return(
        <div className="wrapper">
        {/* card for op details */}
        <Link 
        to={{pathname: link, state: {opid: `${this.props.atkop._id}`}}} 
        > 
          <div className="op-card">
            <div className="op-card__image op-card__image">
              <img src={`http://localhost:8000${this.props.atkop.img}`} alt={`${this.props.atkop.name}`} />
            </div>
            <div className="op-card__level op-card__level"></div>
            <div className="op-card__unit-name">{this.props.atkop.name}</div>
            {/* area to describe unique gadget */}
            <div className="op-card__unit-description">
            <img className="one-half" src={`http://localhost:8000${this.props.atkop.badge}`} alt={`${this.props.atkop.name}`}/>
            </div>
          </div> 
          </Link>{/*   end of card */}
        </div>
    )
  }
}

export default Atkop