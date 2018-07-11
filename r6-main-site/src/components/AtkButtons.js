import React, {Component} from 'react';
import { Button, Dropdown } from 'semantic-ui-react';
import AtkButton from './AtkButton';

class AtkButtons extends Component {
  
  render(){
    // loop through all bombs and create a button for each 
    let atkLocations = Object.values(this.props.atks);
    let atkButtons = atkLocations.map((atkButton, i)=>{
      if (atkButton.name !== 'NA'){
        return (
          <AtkButton key={i} onSelectAtk={this.props.onSelectAtk} className='atkspawns' atk={atkButton} />
        )
      }
    });
    

    return(
      <div className='atkLocations'>
      <Button.Group>
          {atkButtons}
        </Button.Group>
      </div>
    )
  }
}


export default AtkButtons