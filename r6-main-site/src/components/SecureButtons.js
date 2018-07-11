import React, {Component} from 'react';
import { Button, Dropdown } from 'semantic-ui-react';
import SecureButton from './SecureButton';

class BombButtons extends Component {
  
  render(){
    console.log(this.props.secureareas)
    // loop through all bombs and create a button for each 
    let secureButtons = this.props.secureareas.map((secureButton)=>{
      if (secureButton.name !== 'NA'){
        return (
          <SecureButton onSelectsecure={this.props.onSelectSecure} className='secure' secure={secureButton} />
        )
      }
      
    });
    

    return(
      <div className='secureLocations'>
      <Button.Group>
          {secureButtons}
        </Button.Group>
      </div>
    )
  }
}


export default BombButtons