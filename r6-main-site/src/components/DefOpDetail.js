import React, {Component} from 'react';
import { Segment, Button, Modal } from 'semantic-ui-react'
import { ProgressBar } from 'react-bootstrap'
import {BASEPATH} from '../config/constants'

class DefOpDetail extends Component {
  render(){

    const SpeedRating = (this.props.defop.SpeedRating * 33) + 1
    Math.round(SpeedRating);
    const ArmorRating = (this.props.defop.ArmorRating * 33) + 1
    Math.round(ArmorRating);

    const opimg = `${BASEPATH}${this.props.defop.img}`
    const opbadge = `${BASEPATH}${this.props.defop.badge}`

    let divStyle = {
      backgroundImage: `url(${opimg})`
    };
    let gadgetimg = {
      backgroundImage: `url(${BASEPATH}${this.props.defop.ability.img})`
    };

    let primaries = this.props.defop.primaries.map( (primary, i) => {
      return (
        <Segment>
        <h1>{primary.name}</h1>
        <img src={`${BASEPATH}${primary.img}`} alt='primary weapon'/>
        </Segment>
      )
    })

    let secondaries = this.props.defop.secondaries.map( (secondary, i) => {
      return (
        <Segment>
        <h1>{secondary.name}</h1>
        <img src={`${BASEPATH}${secondary.img}`} alt='secondary weapon'/>
        </Segment>
      )
    })

    let gadgets = this.props.defop.gadgets.map( (gadget, i) => {
      return (
        <Segment>
        <h1>{gadget.name}</h1>
        <img src={`${BASEPATH}${gadget.img}`} alt='gadget weapon'/>
        </Segment>
      )
    })

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
          
          <Modal className="biomodal" trigger={<Button className="biobutt">Show Bio</Button>} centered={false}>
            <Modal.Header>Bio</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <p>{this.props.defop.bio}</p>
              </Modal.Description>
            </Modal.Content>
          </Modal>

          </Segment>

        </Segment.Group>
        </div>
    </section>
    <section className="mid-detail">
      <section className="weapons">
        <section className="uniqueability">
          <h1>Unique Ability</h1>
          <div className="gadgetimg" style={gadgetimg}>
          <h2>{this.props.defop.ability.name}</h2>
          </div>
          <Segment className="gadgetdesc">
            <p>{this.props.defop.ability.description}</p>
          </Segment>
          </section>
    <Segment.Group className="priweapons">
    <h1>Primary Weapons</h1>
    {primaries}
    </Segment.Group>
    <Segment.Group className="secweapons">
    <h1>Secondary Weapons</h1>
    {secondaries}
    </Segment.Group>
      <Segment.Group className="gadgets">
      <h1>Gadgets</h1>
      {gadgets}
      </Segment.Group>
    </section>
    </section>
  </div>
  
    )
  }
}

export default DefOpDetail