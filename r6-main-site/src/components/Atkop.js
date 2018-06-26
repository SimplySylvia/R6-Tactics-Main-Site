import React, {Component} from 'react'

class Atkop extends Component {

  render(){
    return(
     <div className="col s12 m6">
       <div className="card darken-1" >

         <div className="card-content black-text">
           <p>{this.props.atkop.name}</p>
         </div>
       </div>
     </div>
    )
  }
}

export default Atkop