import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';

class BombButton extends Component {
 selectBomb = () => {
    this.props.onSelectBomb(this.props.bomb)
 }
  render(){
    return(
          <Button onClick={this.selectBomb}  color='orange' >{this.props.bomb.assignment + ' A: ' + this.props.bomb.a + ' B: ' + this.props.bomb.b}</Button>
    )
  }
}


export default BombButton