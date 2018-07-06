import React, {Component} from 'react';

class DefOpDeatil extends Component {
  

  render(){
    console.log(`here is a prop:`, this.props.defop)
    return(

  <div>
  <h1>{this.props.defop.name}</h1>
  <h2>{this.props.defop.gadget.name}</h2>
  
  </div>
  
    )
  }
}

export default DefOpDeatil