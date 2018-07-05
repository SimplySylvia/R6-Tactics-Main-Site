import React, {Component} from 'react'
import Atkop from './Atkop'

class Atkops extends Component {
  render(){
    let atkops = this.props.atkops.map( (atkop, i) => {
      return (
        <Atkop
          atkop={atkop}
          key={i} />
      )
    })
    
    return(
      <div className="atkops">
      <div className="atkHeader">
      <h3>Attack Operators</h3>
      </div>
      
      <div className="opsList">
      <div className="ops">
        {atkops}
        </div>
        </div>
      </div>
    )
  }
}

export default Atkops