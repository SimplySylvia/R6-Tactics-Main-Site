import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {BASEPATH} from '../config/constants'

class Atkop extends Component {
  render(){
    const { name, _id, img, badge} = this.props.atkop
    const link = `/AttackOp/${name}`;
    return(
        <div className="wrapper">
        <Link 
        to={{pathname: link, state: {opid: `${_id}`}}} 
        > 
          <div className="op-card">
            <div className="op-card__image op-card__image">
              <img src={`${BASEPATH}${img}`} alt={`${name}`} />
            </div>
            <div className="op-card__unit-name">{name}</div>
            <img className="one-half" src={`${BASEPATH}${badge}`} alt={`${name}`}/>
          </div> 
          </Link>
        </div>
    )
  }
}

export default Atkop