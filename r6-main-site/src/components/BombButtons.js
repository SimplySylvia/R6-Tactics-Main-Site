import React, {Component} from 'react';
import { Button, Dropdown } from 'semantic-ui-react';
import BombButton from './BombButton';

class BombButtons extends Component {
  
  render(){
    console.log(this.props.bombs)
    // loop through all bombs and create a button for each 
    let bombButtons = this.props.bombs.map((bombButton)=>{
      if (bombButton.name !== 'NA'){
        return (
          <BombButton onSelectBomb={this.props.onSelectBomb} className='bomb' bomb={bombButton} />
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