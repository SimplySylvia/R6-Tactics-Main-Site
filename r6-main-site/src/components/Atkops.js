import React, {Component} from 'react'
import Atkop from './Atkop'

class Atkops extends Component {
  render(){
    let atkops = this.props.atkops.map( (atkop) => {
      return (
        <Atkop
          atkop={atkop} />
      )
    })
    
    return(
      <div className="atkops">
      <div className="atkHeader">
      <h3>Atk Ops</h3>
      </div>
      
      <div className="opsList">
        {atkops}
        </div>
      </div>
    )
  }
}

export default Atkops