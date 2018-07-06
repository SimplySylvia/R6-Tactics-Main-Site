import React, {Component} from 'react';

class AtkOpDeatil extends Component {
  

  render(){
    console.log(`here is a prop:`, this.props.atkop)
    return(

  <div>
  <h1>{this.props.atkop.name}</h1>
  <h2>{this.props.atkop.gadget.name}</h2>
  
  </div>
  
    )
  }
}

export default AtkOpDeatil