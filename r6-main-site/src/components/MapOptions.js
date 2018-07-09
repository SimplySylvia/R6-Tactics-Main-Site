import React, {Component} from 'react';
import { Button, Dropdown } from 'semantic-ui-react';

class MapOptions extends Component {
  constructor(){
    super();
    this.selectFloor = this.selectFloor.bind(this);
 }
 
 selectFloor(){
    this.props.onSelectFloor(this.props.floor)
    console.log("YOOOO", this.props.floor)
 }



  render(){
    // loop through all floors and create a button for each floor 
    let floorButtons = this.props.map.floors.map((floorButton)=>{
      // console.log(`this is the floor button:`,floorButton);
      if (floorButton.name !== 'NA'){
        return (
          <Button className='floor' floor={floorButton} onClick={this.selectFloor}>{floorButton.name}</Button>
        )
      }
      
    });

    console.log(`here is a prop:`, this.props.map);

    // gather atkspawns and generate drop down
    const atkspawns = Object.values(this.props.map.atkspawns);
    const atkOptions = [];
    const createSpawnObject = atkspawns.map((atkspawn)=>{
      atkOptions.push(
          {
            text: atkspawn,
            value: atkspawn,
          }
      )
    });

    // gather secure area locations and genreate options
    const salocations = Object.values(this.props.map.securearea);
    const saOptions = [];
    const createSaObject = salocations.map((salocation)=>{
      saOptions.push(
          {
            text: salocation,
            value: salocation,
          }
      )
    });

    // gather hostage info and create dropdown
    const hoslocations = Object.values(this.props.map.hostage);
    const hosOptions = [];
    const createhosObject = hoslocations.map((hoslocation)=>{
      hosOptions.push(
          {
            text: hoslocation,
            value: hoslocation,
          }
      )
    });

    // gather bomb info and create dropdown
    const bomblocations = Object.values(this.props.map.bombsites);
    const bombOptions = [];
    const createbombObject = bomblocations.map((bomblocation)=>{
      bombOptions.push(
          {
            text: bomblocation.assignment + ' A: ' + bomblocation.a + ' B: ' + bomblocation.b,
            value: bomblocation.assignment + ' A: ' + bomblocation.a + ' B: ' + bomblocation.b,
          }
      )
    });

    

    return(
      <section className='mapOptions'>
        <h1>Floors</h1>
        <div className='floorOptions'>
          {floorButtons}
        </div>
        <h1>Bomb Locations</h1>
        <div className='bombLocations'>
        <Dropdown className='bombDropDown' placeholder='Select Location' fluid selection options={bombOptions} />
        </div>
        <h1>Secure Area</h1>
        <div className='saLocations'>
        <Dropdown className='saDropDown' placeholder='Select Location' fluid selection options={saOptions} />
        </div>
        <h1>Hostage</h1>
        <div className='hosLocations'>
        <Dropdown className='hosDropDown' placeholder='Select Location' fluid selection options={hosOptions} />
        </div>
        <h1>Attack Spawns</h1>
        <div className='atkLocations'>
        <Dropdown className='atkDropDown' placeholder='Select Location' fluid selection options={atkOptions} />
        </div>
      </section>
    )
  }
}


export default MapOptions