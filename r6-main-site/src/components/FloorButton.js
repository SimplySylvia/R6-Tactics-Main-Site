import React, {Component} from 'react';
import { Button, Dropdown } from 'semantic-ui-react';

class FloorButton extends Component {
  constructor(){
    super();
    this.selectFloor = this.selectFloor.bind(this);
 }
 
 selectFloor(){
    this.props.onSelectFloor(this.props.floor)
    console.log("YOOOO", this.props.floor )
 }

  render(){
   
    return(
          <Button color='orange' onClick={this.selectFloor}>{this.props.floor.name}</Button>
    )
  }
}


export default FloorButton