import React, {Component} from 'react'

class Defop extends Component {

  render(){
    return(

  <div className="wrapper">
  {/* card for op details */}
    <div className="clash-card barbarian">
      <div className="clash-card__image clash-card__image--barbarian">
        <img src={`http://localhost:8000${this.props.defop.img}`} alt={`${this.props.defop.name}`} />
      </div>
      <div className="clash-card__level clash-card__level--barbarian"></div>
      <div className="clash-card__unit-name">{this.props.defop.name}</div>
      {/* area to describe unique gadget */}
      <div className="clash-card__unit-description">
      <div className="clash-card__gadget-title">Unique Gadget</div>
      <img className="one-half" src={`http://localhost:8000${this.props.defop.badge}`} alt={`${this.props.defop.name}`}/>
      <ul className="one-half gadget-name">
        <li>{this.props.defop.gadget.name}</li>
        <li>Uses: {this.props.defop.gadget.uses}</li>
      </ul>
      </div>
        {/* stats area for speed and armor rating */}
      <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
        <div className="one-third organization">
          <div className="stat">{this.props.defop.Organization}</div>
          <div className="stat-value">Organization</div>
        </div>

        <div className="one-third">
          <div className="stat">{this.props.defop.ArmorRating}</div>
          <div className="stat-value">Armor Rating</div>
        </div>

        <div className="one-third no-border">
          <div className="stat">{this.props.defop.SpeedRating}</div>
          <div className="stat-value">Speed Rating</div>
        </div>
      </div>

    </div> {/*   end of card */}
  </div>
  
    )
  }
}

export default Defop