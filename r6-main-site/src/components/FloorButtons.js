import React, {Component} from 'react';
import { Button, Dropdown } from 'semantic-ui-react';
import FloorButton from './FloorButton';

class FloorButtons extends Component {
  
  render(){
    console.log(this.props.floor)
    // loop through all floors and create a button for each floor 
    let floorButtons = this.props.floors.map((floorButton)=>{
      if (floorButton.name !== 'NA'){
        return (
          <FloorButton onSelectFloor={this.props.onSelectFloor} className='floor' floor={floorButton} />
        )
      }
      
    });
    

    return(
        <div className='floorOptions'>
        <Button.Group>
          {floorButtons}
        </Button.Group>
        </div>
    )
  }
}


export default FloorButtons