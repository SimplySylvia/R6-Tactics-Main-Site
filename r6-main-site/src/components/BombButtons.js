import React, {Component} from 'react';
import { Button, Dropdown } from 'semantic-ui-react';
import BombButton from './BombButton';

class BombButtons extends Component {
  
  render(){
    // loop through all bombs and create a button for each 
    let bombButtons = this.props.bombs.map((bombButton, i)=>{
      if (bombButton.name !== 'NA'){
        return (
          <BombButton key={i} onSelectBomb={this.props.onSelectBomb} className='bomb' bomb={bombButton} />
        )
      }
      
    });
    

    return(
      <div className='bombLocations'>
      <Button.Group vertical>
          {bombButtons}
        </Button.Group>
      </div>
    )
  }
}


export default BombButtons