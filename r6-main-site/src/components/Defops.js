import React, {Component} from 'react'
import Defop from './Defop'

class Defops extends Component {
  render(){
    const {defops} = this.props
    let defopCards = defops.map( (defop, i) => {
      return (
        <Defop
          defop={defop}
          key={i} />
      )
    })
    
    return(
      <div className="atkops">
      <div className="defHeader">
      <h3>Defense Operators</h3>
      </div>
      <div className="opsList">
      <div className="ops">
        {defopCards}
        </div>
        </div>
      </div>
    )
  }
}

export default Defops