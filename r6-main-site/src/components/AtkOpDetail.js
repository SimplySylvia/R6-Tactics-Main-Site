import React, {Component} from 'react';
import { Segment, Button, Modal } from 'semantic-ui-react'
import { ProgressBar } from 'react-bootstrap'
import {BASEPATH} from '../config/constants'

class AtkOpDeatil extends Component {
  render(){
    const { Organization, bio, name, SpeedRating, ArmorRating, img, badge, ability, primaries, secondaries, gadgets } = this.props.atkop

    const Speed = (SpeedRating * 33) + 1
    Math.round(Speed);
    const Armor = (ArmorRating * 33) + 1
    Math.round(Armor);

    const opimg = `${BASEPATH}${img}`
    const opbadge = `${BASEPATH}${badge}`

    let divStyle = {
      backgroundImage: `url(${opimg})`
    };
    let gadgetimg = {
      backgroundImage: `url(${BASEPATH}${ability.img})`
    };

    let primaryWeapons = primaries.map( (primary, i) => {
      return (
        <Segment>
        <h1>{primary.name}</h1>
        <img src={`${BASEPATH}${primary.img}`} alt='primary weapon'/>
        </Segment>
      )
    })

    let secondaryWeapons = secondaries.map( (secondary, i) => {
      return (
        <Segment>
        <h1>{secondary.name}</h1>
        <img src={`${BASEPATH}${secondary.img}`} alt='secondary weapon' />
        </Segment>
      )
    })

    let Opgadgets = gadgets.map( (gadget, i) => {
      return (
        <Segment>
        <h1>{gadget.name}</h1>
        <img src={`${BASEPATH}${gadget.img}`} alt='gadget'/>
        </Segment>
      )
    })
    return(
      <div className="opPage">
        <section className="topdetail atkertop">
        <div className="backgroundOp" style={divStyle}>
          <section className="opHeader" >
          <p className="opHeaderName">{name}</p>

          <img className="opbadgeheader" src={opbadge} alt={`${name} badge`}/>
          </section>
            <Segment.Group className="stats">
              <Segment>
              <h2>Speed</h2>
                <ProgressBar>
                  <ProgressBar striped bsStyle="success" now={Speed} key={1} />
                  <ProgressBar striped bsStyle="danger" now={100 - Speed} key={2} />
                </ProgressBar>
              </Segment>
              <Segment>
              <h2>Armor</h2>
                <ProgressBar>
                  <ProgressBar striped bsStyle="success" now={Armor} key={1} />
                  <ProgressBar striped bsStyle="danger" now={100 - Armor} key={2} />
                </ProgressBar>
              </Segment>
              <Segment>
              <h2>Organization:</h2>
              <h2 className="org">{Organization}</h2>
                
              </Segment>
              
              <Segment className="bio">

              <Modal className="biomodal" trigger={<Button className="biobutt">Show Bio</Button>} centered={false}>
                <Modal.Header>Bio</Modal.Header>
                <Modal.Content>
                  <Modal.Description>
                    <p>{bio}</p>
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
              <h2>{ability.name}</h2>
              </div>
              <Segment className="gadgetdesc">
                <p>{ability.desc}</p>
              </Segment>
              </section>
              <Segment.Group className="priweapons">
        <h1>Primary Weapons</h1>
        {primaryWeapons}
        </Segment.Group>
        <Segment.Group className="secweapons">
        <h1>Secondary Weapons</h1>
        {secondaryWeapons}
        </Segment.Group>
          <Segment.Group className="gadgets">
          <h1>Gadgets</h1>
          {Opgadgets}
          </Segment.Group>
        </section>
        </section>
      </div>
  
    )
  }
}


export default AtkOpDeatil