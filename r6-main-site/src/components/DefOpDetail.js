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
    var gadgetimg = {
      backgroundImage: `url(http://localhost:8000${this.props.defop.gadget.img})`
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
      <section className="weapons">
        <section className="uniqueability">
          <h1>Unique Ability</h1>
          <div className="gadgetimg" style={gadgetimg}>
          <h2>{this.props.defop.gadget.name}</h2>
          </div>
          <Segment className="gadgetdesc">
            <p>{this.props.defop.gadget.desc}</p>
          </Segment>
          </section>
    <Segment.Group className="priweapons">
    <h1>Primary Weapons</h1>
    <Segment>
    <h1>{this.props.defop.primaries.pri1.name}</h1>
    <img src={`http://localhost:8000${this.props.defop.primaries.pri1.img}`} />
    </Segment>
    <Segment>
    <h1>{this.props.defop.primaries.pri2.name}</h1>
    <img src={`http://localhost:8000${this.props.defop.primaries.pri2.img}`} />
    </Segment>
    </Segment.Group>
    <Segment.Group className="secweapons">
    <h1>Secondary Weapons</h1>
    <Segment>
    <h1>{this.props.defop.secondaries.sec1.name}</h1>
    <img src={`http://localhost:8000${this.props.defop.secondaries.sec1.img}`} />
    </Segment>
    <Segment>
    <h1>{this.props.defop.secondaries.sec2.name}</h1>
    <img src={`http://localhost:8000${this.props.defop.secondaries.sec2.img}`} />
    </Segment>
    </Segment.Group>
      <Segment.Group className="gadgets">
      <h1>Gadgets</h1>
        <Segment>
          <h1>{this.props.defop.gadgets.gad1.name}</h1>
          <img src={`http://localhost:8000${this.props.defop.gadgets.gad1.img}`} />
        </Segment>
        <Segment>
          <h1>{this.props.defop.gadgets.gad2.name}</h1>
          <img src={`http://localhost:8000${this.props.defop.gadgets.gad2.img}`} />
        </Segment>
      </Segment.Group>
    </section>
    </section>
  </div>
  
    )
  }
}

export default DefOpDeatil