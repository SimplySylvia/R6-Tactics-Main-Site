import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';

class FloorButton extends Component {
 
 selectFloor = () => {
    this.props.onSelectFloor(this.props.floor)
 }

  render(){
    return(
          <Button color='orange' onClick={this.selectFloor}>{this.props.floor.name}</Button>
    )
  }
}


export default FloorButton