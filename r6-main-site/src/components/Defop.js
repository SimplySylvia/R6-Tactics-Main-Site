import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {BASEPATH} from '../helper.js'

class Defop extends Component {

  render(){
    const link = `/DefenseOp/${this.props.defop.name}`;
    return(
          <div className="wrapper">
          <Link 
          to={{pathname: link, state: {opid: `${this.props.defop._id}`}}} 
          > 
            <div className="op-card">
              <div className="op-card__image op-card__image">
                <img src={`${BASEPATH}${this.props.defop.img}`} alt={`${this.props.defop.name}`} />
              </div>
              <div className="op-card__level op-card__level"></div>
              <div className="op-card__unit-name">{this.props.defop.name}</div>
              <div className="op-card__unit-description">
              <img className="one-half" src={`${BASEPATH}${this.props.defop.badge}`} alt={`${this.props.defop.name}`}/>
              </div>
            </div>
            </Link>
          </div>
  
    )
  }
}

export default Defop