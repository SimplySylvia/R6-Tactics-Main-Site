import React, {Component} from 'react';
import { Button, Dropdown } from 'semantic-ui-react';

class HostageButton extends Component {
  constructor(){
    super();
    this.selectHostage = this.selectHostage.bind(this);
 }
 
 selectHostage(){
    this.props.onSelectHostage(this.props.hostage)
 }

  render(){
   
    return(
          <Button onClick={this.selectHostage}  color='orange' >{this.props.hostage}</Button>
    )
  }
}


export default HostageButton