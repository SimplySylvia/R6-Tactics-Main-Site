import React, {Component} from 'react'
import Atkop from './Atkop'

class Atkops extends Component {
  render(){
    const {atkops} = this.props
    let atkopCards = atkops.map( (atkop, i) => {
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
        {atkopCards}
        </div>
        </div>
      </div>
    )
  }
}

export default Atkops