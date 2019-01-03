import React, {Component} from 'react';
import { Button, Dropdown } from 'semantic-ui-react';

class SecureButton extends Component {
  constructor(){
    super();
    this.selectSecure = this.selectSecure.bind(this);
 }
 
 selectSecure(){
    this.props.onSelectSecure(this.props.secure)
 }

  render(){
   
    return(
          <Button onClick={this.selectSecure}  color='orange' >{this.props.secure}</Button>
    )
  }
}


export default SecureButton