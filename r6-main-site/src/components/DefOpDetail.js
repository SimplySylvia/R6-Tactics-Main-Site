import React, {Component} from 'react';
import { Segment, Container } from 'semantic-ui-react'
import { ProgressBar } from 'react-bootstrap'

class DefOpDeatil extends Component {
  

  render(){
    console.log(`here is a prop:`, this.props.defop)
    const SpeedRating = (this.props.defop.SpeedRating * 33) + 1
    Math.round(SpeedRating);
    const ArmorRating = (this.props.defop.ArmorRating * 33) + 1
    Math.round(ArmorRating);
    const opimg = `http://localhost:8000${this.props.defop.img}`
    const opbadge = `http://localhost:8000${this.props.defop.badge}`
    var divStyle = {
      backgroundImage: `url(${opimg})`
    };
    return(

  <div className="opPage">
    <section className="topdetail">
    <div className="backgroundOp" style={divStyle}>
      <section className="opHeader" >
      <p className="opHeaderName">{this.props.defop.name}</p>

      <img className="opbadgeheader" src={opbadge} alt={`${this.props.defop.name} badge`}/>
      </section>
        <Segment.Group className="stats">
          <Segment>
          <h2>Speed</h2>
            <ProgressBar>
              <ProgressBar striped bsStyle="success" now={SpeedRating} key={1} />
              <ProgressBar striped bsStyle="danger" now={100 - SpeedRating} key={2} />
            </ProgressBar>
          </Segment>
          <Segment>
          <h2>Armor</h2>
            <ProgressBar>
              <ProgressBar striped bsStyle="success" now={ArmorRating} key={1} />
              <ProgressBar striped bsStyle="danger" now={100 - ArmorRating} key={2} />
            </ProgressBar>
          </Segment>
          <Segment>
          <h2>Organization:</h2>
          <h2 className="org">{this.props.defop.Organization}</h2>
            
          </Segment>
          <Segment className="bio">
          <h2>Bio:</h2>
          <p className="biostory">{this.props.defop.bio}</p>
          </Segment>
        </Segment.Group>
        </div>
    </section>
    <section className="mid-detail">
    <h2>Equiptment</h2>

    </section>
  </div>
  
    )
  }
}

export default DefOpDeatil