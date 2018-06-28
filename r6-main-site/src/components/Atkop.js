import React, {Component} from 'react'

class Atkop extends Component {

  render(){
    return(

  <div className="wrapper">
  {/* card for op details */}
    <div className="clash-card barbarian">
      <div className="clash-card__image clash-card__image--barbarian">
        <img src={`http://localhost:8000${this.props.atkop.img}`} alt={`${this.props.atkop.name}`} />
      </div>
      <div className="clash-card__level clash-card__level--barbarian">{this.props.atkop.Organization}</div>
      <div className="clash-card__unit-name">{this.props.atkop.name}</div>
      {/* area to describe unique gadget */}
      <div className="clash-card__unit-description">
      <div className="clash-card__gadget-title">Unique Gadget</div>
      <img className="one-half" src={`http://localhost:8000${this.props.atkop.badge}`} />
      <ul className="one-half">
        <li>{this.props.atkop.gadget.name}</li>
        <li>Uses: {this.props.atkop.gadget.uses}</li>
      </ul>
      </div>
        {/* stats area for speed and armor rating */}
      <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
        <div className="one-third">
          <div className="stat">20</div>
          <div className="stat-value">Training</div>
        </div>

        <div className="one-third">
          <div className="stat">{this.props.atkop.ArmorRating}</div>
          <div className="stat-value">Armor Rating</div>
        </div>

        <div className="one-third no-border">
          <div className="stat">{this.props.atkop.SpeedRating}</div>
          <div className="stat-value">Speed Rating</div>
        </div>
      </div>

    </div> {/*   end of card */}
  </div>
  
    )
  }
}

export default Atkop