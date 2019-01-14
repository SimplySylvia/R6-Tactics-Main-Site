import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';
import BombButton from './BombButton';

class BombButtons extends Component {
  render(){
    let bombButtons = this.props.bombs.map((bombButton, i) => {
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