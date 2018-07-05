import React, {Component} from 'react'

class Defop extends Component {

  render(){
    return(

  <div className="wrapper">
  {/* card for op details */}
    <div className="op-card">
      <div className="op-card__image op-card__image">
        <img src={`http://localhost:8000${this.props.defop.img}`} alt={`${this.props.defop.name}`} />
      </div>
      <div className="op-card__level op-card__level"></div>
      <div className="op-card__unit-name">{this.props.defop.name}</div>
      {/* area to describe unique gadget */}
      <div className="op-card__unit-description">
      <div className="op-card__gadget-title">Unique Gadget</div>
      <img className="one-half" src={`http://localhost:8000${this.props.defop.badge}`} alt={`${this.props.defop.name}`}/>
      <ul className="one-half gadget-name">
        <li>{this.props.defop.gadget.name}</li>
      </ul>
      </div>
    </div> {/*   end of card */}
  </div>
  
    )
  }
}

export default Defop