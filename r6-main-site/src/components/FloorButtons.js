import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';
import FloorButton from './FloorButton';

class FloorButtons extends Component {
  
  render(){
    let floorButtons = this.props.floors.map((floorButton, i)=>{
      if (floorButton.name !== 'NA'){
        return (
          <FloorButton key={i} onSelectFloor={this.props.onSelectFloor} className='floor' floor={floorButton} />
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