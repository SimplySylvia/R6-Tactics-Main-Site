import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';

class HostageButton extends Component {
 
 selectHostage = () => {
    this.props.onSelectHostage(this.props.hostage)
 }

  render(){
   
    return(
          <Button onClick={this.selectHostage}  color='orange' >{this.props.hostage}</Button>
    )
  }
}


export default HostageButton