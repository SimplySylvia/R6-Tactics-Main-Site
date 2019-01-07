import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';
import SecureButton from './SecureButton';

class SecureButtons extends Component {
  
  render(){
    // loop through all bombs and create a button for each 
    let saLocations = Object.values(this.props.secureareas);
    let secureButtons = saLocations.map((secureButton, i)=>{
      if (secureButton.name !== 'NA'){
        return (
          <SecureButton key={i} onSelectSecure={this.props.onSelectSecure} className='secure' secure={secureButton} />
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


export default SecureButtons